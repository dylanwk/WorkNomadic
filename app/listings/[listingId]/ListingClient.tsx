'use client';
import { categories } from '@/components/categories/Categories';
import Container from '@/components/Container';
import ListingHead from '@/components/listings/ListingHead';
import ListingInfo from '@/components/listings/ListingInfo';
import { SafeListing } from '@/lib/types';
import React, { useMemo } from 'react';
import ListingLink from '@/components/listings/ListingLink';
import dynamic from 'next/dynamic';
import useCountries from '@/app/hooks/useCountries';
import { Skeleton } from '@/components/ui/skeleton';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <Skeleton className="h-[50vh] w-auto" />
});

interface ListingClientProps {
  listing: SafeListing;
}

const ListingClient: React.FC<ListingClientProps> = ({ listing }) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  //#1DA1F2 -> color of external links

  const { getByValue } = useCountries();
  const coordinates = getByValue(listing.locationValue)?.latlng;

  // placeholder
  const listingLink = 'https://vrbo.com';

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            roomCount={listing.roomCount}
            bathroomCount={listing.bathroomCount}
            guestCount={listing.guestCount}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-4 ">
            <ListingInfo
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingLink
                price={listing.price}
                buttonImageSrc={'/images/vrbo.svg'}
                listingLink={listingLink}
              />
              <div className="mt-8 h-[60vh]">
                <Map center={coordinates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
