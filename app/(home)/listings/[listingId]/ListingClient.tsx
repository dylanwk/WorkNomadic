'use client';
import { categories } from '@/components/categories/Categories';
import Container from '@/components/Container';
import ListingHead from '@/components/listings/ListingHead';
import ListingInfo from '@/components/listings/ListingInfo';
import { SafeListing } from '@/lib/types';
import { Reservation } from '@prisma/client';
import React, { useMemo } from 'react';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing;
}

const ListingClient: React.FC<ListingClientProps> = ({ listing }) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6 ">
            {/* potential housing provider name */}
            <ListingInfo
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
          
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
