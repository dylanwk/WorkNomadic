import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import Searchbar from '@/components/searchbar/Searchbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import getListings from '../api/actions/getListings';
import ListingCard from '@/components/listings/ListingCard';
import dynamic, { LoaderComponent } from 'next/dynamic';
import CategorySkeleton from '@/components/categories/CategorySkeleton';

export default async function Home() {
  const listings = await getListings();

  // TODO: add currentUser funcitonality
  const currentUser = null;

  const Categories = dynamic(
    () =>
      import('@/components/categories/Categories').then(
        (module) => module.default
      ),
    {
      loading: () => <CategorySkeleton />,
      ssr: false
    }
  );

  return (
    <>
      <section
        className="z-10 bg-center bg-no-repeat bg-cover bg-gray-300 bg-blend-multiply"
        style={{ backgroundImage: "url('/images/rio2.jpg')" }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 sm:py-20 lg:py-35">
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <div className="w-full sm:w-3/4 md:w-4/5 lg:w-3/4 py-4 ">
              <div className="flex flex-row items-center justify-center gap-3 md:gap-0">
                <Searchbar />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end">
          <h1 className="pb-4 pl-4 -mt-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">
            Tailored to Nomads <br />
            Like You.
          </h1>
        </div>
      </section>
      {/* <Categories /> */}
      <Categories />
      {listings.length === 0 ? (
        <EmptyState showReset />
      ) : (
        <Container>
          <div className="min-h-screen pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing: any) => {
              return (
                <ListingCard
                  key={listing.id}
                  data={listing}
                  currentUser={currentUser}
                />
              );
            })}
          </div>
        </Container>
      )}
    </>
  );
}
