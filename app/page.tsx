'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <main>
      <section className="bg-background">
        <div className="grid max-w-screen-2xl px-4 py-8 items-center mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className="mr-auto px-3 pr-8 pl-6 place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary">
              Destinations for Digital Nomads.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
              We are a travel agency designed for those who work remote.
            </p>
            <Button size={'lg'} asChild>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-grey-900 rounded-lg  hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
              >
                Explore Destinations
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 pr-8">
            <Image
              className="rounded-lg"
              src="/images/homePic2.png"
              alt=""
              quality={100}
              height={541}
              width={390}
              loading="lazy"
            />
            <Image
              className="mt-4 lg:mt-10 rounded-lg"
              src="/images/homePic1.png"
              alt=""
              height={541}
              width={390}
              quality={100}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="pt-24 bg-background"></div>

      <div className="bg-background">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
            <div className="grid items-center text-center grid-cols-1 gap-12">
              <h1 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                A Travel Agency by Digital Nomads.&nbsp; <br></br>
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#c5ce7f]"></span>
                  <h1 className="relative text-3xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
                    {' '}
                    For Digital Nomads.
                  </h1>
                </div>
              </h1>

              <div className="grid mb-8 border border-gray-200 rounded-xl shadow-md  md:mb-12 md:grid-cols-2 text-primary">
                <figure className="flex flex-col items-center justify-center p-6 text-center border-b md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
                    <h3 className="text-3xl font-semibold tracking-tight">
                      Locations
                    </h3>
                    <p className="mx-6 my-4">
                      All locations are in close proximity to ammendities such
                      as cafes, restaurants, grocery stores, and coworking
                      spaces
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center ">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">🌴</div>
                    </div>
                  </figcaption>
                </figure>

                <figure className="flex flex-col items-center justify-center p-6 text-center border-b">
                  <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
                    <h3 className="text-3xl tracking-tight font-semibold">
                      Accommodations
                    </h3>
                    <p className="mx-6 my-4">
                      Every listing is garuenteed to be in proximity to reliable
                      wifi, and work-friendly spaces.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">💻</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-6 text-center md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
                    <h3 className="text-3xl font-semibold tracking-tight">
                      Booking Options
                    </h3>
                    <p className="mx-6 my-4">
                      Our listings offer last-minute bookings, and the ability
                      to modify reservations easily.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">✈️</div>
                    </div>
                  </figcaption>
                </figure>

                <figure className="flex flex-col items-center justify-center p-6 text-center ">
                  <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
                    <h3 className="text-3xl tracking-tight font-semibold ">
                      Pricing
                    </h3>
                    <p className="mx-6 my-4">
                      We promise a no add-on charge policy for every listing.
                      Price comes from the housing providor straight to you.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center ">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">💰</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-12"></div>

      {/* TODO: Replace url links with loaded pictures */}

      <section className="p-12">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-3xl text-center pb-10">
            <h1 className="text-3xl tracking-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Explore our most popular Locations 🌎
            </h1>
          </div>
        </div>

        <div className="flex justify-center pb-10">
          <Carousel
            plugins={[plugin.current]}
            className=" max-w-4xl px-4 sm:px-0"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="flex items-center justify-center">
                    <img
                      src="images/rio-pic.jpeg"
                      alt="Location 1"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="flex items-center justify-center max-h-fit">
                    <img
                      src="images/oceania-pic.jpeg"
                      alt="Location 1"
                      className=""
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* Add more CarouselItem components with different images */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <div className="py-8"></div>
    </main>
  );
}
