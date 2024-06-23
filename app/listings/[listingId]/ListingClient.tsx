'use client';
import Container from '@/components/Container';
import ListingHead from '@/components/listings/ListingHead';
import ListingInfo from '@/components/listings/ListingInfo';
import { SafeListing } from '@/lib/types';
import { useEffect, useMemo, useState } from 'react';
import ListingLink from '@/components/listings/ListingLink';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { descriptors } from '@/lib/types';
import { IconType } from 'react-icons/lib';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <Skeleton className="h-[50vh] w-auto" />
});

interface ListingClientProps {
  listing: SafeListing;
}

const ListingClient: React.FC<ListingClientProps> = ({ listing }) => {
  const [coordinates, setCoordinates] = useState<number[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          listing.location
        )}&format=json&limit=1`
      );

      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates([parseFloat(lat), parseFloat(lon)]);
      } else {
        setCoordinates([51, -0.09]);
      }
    };

    fetchData();
  }, [listing.location]);

  const descriptor_arr = listing.descriptors
    .replace(/[\[\]']/g, '')
    .split(',')
    .map((desc) => desc.trim());

  const descriptor_items = useMemo(() => {
    return descriptor_arr
      .map((descriptor) =>
        descriptors.find((category) => category.label === descriptor)
      )
      .filter(
        (
          item
        ): item is { label: string; icon: IconType; description: string } =>
          item !== undefined
      );
  }, [descriptor_arr]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            bedCount={listing.bedCount}
            bathroomCount={listing.bathroomCount}
            guestCount={listing.guestCount}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-4 ">
            <ListingInfo
              description={listing.description}
              descriptors={descriptor_items}
              locationValue={listing.locationAttractions}
              location={listing.location}
              amenities={listing.amenities}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingLink
                price={listing.price}
                buttonImageSrc={'/images/vrbo.svg'}
                listingLink={listing.link}
              />
              <div className="mt-8 h-[50vh] max-h-[50vh]">
                {coordinates ? (
                  <Map center={coordinates} />
                ) : (
                  <Skeleton className="h-[50vh] w-auto" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
