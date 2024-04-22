import { Categories } from '@/components/categories/Categories';
import Container from '@/components/Container';
import Searchbar from '@/components/searchbar/Searchbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Locations = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-cover bg-[url(/images/rio2.jpg)] bg-gray-300 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 sm:py-20 lg:py-40">
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <div className="w-full sm:w-3/4 md:w-4/5 lg:w-3/4 py-4 ">
              <div className="flex flex-row items-center justify-center gap-3 md:gap-0">
                <Searchbar />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end">
          <h1 className="p-4 -mt-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">
            Tailored to Nomads <br />
            Like You.
          </h1>
        </div>
      </section>
      <Categories />

      <section className="py-10 bg-background sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                <div className="text-5xl">💰</div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                No Markup Pricing
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                There is $0 add-on charge from the housing provider to you.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <div className="text-5xl">💨</div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy Booking
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Book straight from the provider&apos;s site, no hassling with
                3rd party vendors.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <div className="text-5xl">💻</div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Work-Friendly Rentals
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                All rentals on Vagaspace are tailored for those who working
                remote.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <div className="text-5xl">🌎</div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                +10,000 Locations
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                View thousands of unique rentals from all corners of the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 pb-48">
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-4xl">
              Don&apos;t know where to go? Let us help you. <br />
            </h2>

            <p className="mt-4 text-gray-700 text-lg mb-6">
              Discover your next destination with Vagaspace&apos;s AI-leveraging
              Travel Recommendation System. <br />
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:divide-x sm:divide-gray-100">
              <div className="px-4 py-8 text-center">
                <dt className="text-lg font-medium text-gray-900">
                  Possible Destinations
                </dt>
                <dd className="text-4xl font-extrabold md:text-5xl">1178</dd>
              </div>

              <div className="px-4 py-8 text-center">
                <dt className="text-lg font-medium text-gray-900">
                  Total Questions
                </dt>
                <dd className="text-4xl font-extrabold md:text-5xl">10</dd>
              </div>
            </dl>
          </div>
          <Link href="/nomad-insights">
            <Button
              size={'lg'}
              variant={'default'}
              className="justify-center mt-14 text-md"
            >
              Find My Destination
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Locations;
