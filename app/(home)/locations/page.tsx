import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Locations = () => {
  return (
    <>
      <section className="relative px-4 py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-48">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://image.cnbcfm.com/api/v1/image/107169413-1671612911067-Thumbnail_Digital_Originals_Digital_Nomad_V3_Clean.jpg?v=1672024297"
            alt=""
          />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r from-black to-transparent md:block"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto max-w-7xl text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-4xl lg:text-5xl">
            The Searchbar is currently down, but try our AI Destination Finder.
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Our Team is doing everything they can to get it back to running.
            Join this list to get notified when we are up and running.
          </p>

          <form action="#" method="POST" className="mt-8 lg:mt-12">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <label htmlFor="email" className="sr-only"></label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              >
                Get Notified
              </button>
            </div>
          </form>
        </div>
      </section>

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
                Book straight from the provider&apos;s site, no hassling with 3rd
                party vendors.
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
                All rentals on Nomadic Page are tailored for those who working
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
              Discover your next destination with Nomadic Page&apos;s AI-leveraging
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
              variant={'secondary'}
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
