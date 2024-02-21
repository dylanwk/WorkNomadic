import { url } from "inspector";
import Image from "next/image";

import Link from "next/link";
import path from "path";
//src="https://api.time.com/wp-content/uploads/2022/07/Worlds-Greatest-Places-2022-BaliIndonesia.jpeg?quality=85&w=1600"

//The Nomad Page is a digital nomad-based travel agency. We provide
//curated destinations through strategic research.
export default function Home() {
  return (
    <main>
      <div className="p-2 bg-yellow-50"></div>

      <section className="  bg-yellow-50">
        <div className="grid max-w-screen-2xl px-4 py-8 items-center mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className="mr-auto px-3 pr-8 pl-6 place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
              Destinations for Remote Workers.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
              We are a travel agency designed for those who work remote.
            </p>
            <a
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
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border  rounded-lg hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 border-gray-900  "
            >
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 pr-8">
            <Image
              className="rounded-lg"
              src="/images/homePic2.png"
              alt=""
              quality={100}
              height={541}
              width={390}
              
            />
            <Image
              className="mt-4 lg:mt-10 rounded-lg"
              src="/images/homePic1.png"
              alt=""
              height={541}
              width={390}
              quality={100}
              
            />
          </div>
        </div>
      </section>

      <div className="pt-24 bg-yellow-50"></div>

      <div className="bg-yellow-50">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
            <div className="grid items-center text-center grid-cols-1 gap-12">
              <h1 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                A Travel Agency by Digital Nomads.&nbsp; <br></br>
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#c5ce7f]"></span>
                  <h1 className="relative text-3xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
                    {" "}
                    For Digital Nomads.
                  </h1>
                </div>
              </h1>
           

              <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 bg-gray-50 ">
                <figure className="flex flex-col items-center justify-center p-6 text-center bg-gray-50 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-3xl font-semibold tracking-tight text-gray-900 ">
                      Locations
                    </h3>
                    <p className="mx-6 my-4">
                      All locations are in close proximity to ammendities such as cafes,
                      restaurants, grocery stores, and coworking spaces
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center ">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">🌴</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-6 text-center bg-gray-50 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-3xl tracking-tight font-semibold text-gray-900 ">
                      Accommodations
                    </h3>
                    <p className="mx-6 my-4">
                      Every listing is garuenteed to be in proximity to reliable wifi, and work-friendly spaces.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center ">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">💻</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-6 text-center bg-gray-50 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-3xl font-semibold tracking-tight text-gray-900 ">
                      Booking Options
                    </h3>
                    <p className="mx-6 my-4">
                    Listings offer last-minute bookings, and the ability to modify reservations easily.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center ">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-50 rounded-full">
                      <div className="text-5xl">✈️</div>
                    </div>
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-6 text-center bg-gray-50 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-3xl tracking-tight font-semibold text-gray-900 ">
                      Pricing
                    </h3>
                    <p className="mx-6 my-4">
                      We promise a add-on charge policy for every listing. Price comes from the housing providor straight to you.
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

      <div className="p-12 bg-yellow-50"></div>

      <section className="bg-yellow-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center pb-10">
            <h1 className="text-3xl tracking-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Explore Locations 🌎
            </h1>

            
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/locations"
              className="group relative block max-h-min bg-black bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url(https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/11/17141542/cape-town-africa.jpeg)",
              }}
            >
              <div className=" hero-overlay bg-opacity-50 rounded-xl">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl text-white sm:text-3xl text-center font-bold">
                    Africa
                  </p>

                  <div className="mt-4">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Known for rich cultural heritage, breathtaking
                        landscapes, and diverse wildlife.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/locations"
              className="group relative block max-h-min bg-black bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url(https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg)",
              }}
            >
              <div className=" hero-overlay bg-opacity-50 rounded-xl">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl text-white sm:text-3xl text-center font-bold">
                    Aisa
                  </p>

                  <div className="mt-4">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Known for vibrant traditions, Aisa everyting from
                        bustling metropolises to serene retreats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/locations"
              className="group relative block max-h-min bg-black bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url(https://www.jetsetter.com//uploads/sites/7/2019/04/GettyImages-471662379-1380x1035.jpg)",
              }}
            >
              <div className=" hero-overlay bg-opacity-50 rounded-xl">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl text-white sm:text-3xl text-center font-bold">
                    Europe
                  </p>

                  <div className="mt-4">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Known for its historic charm, Europe enchants it&apos;s
                        travelers with centuries-old cultures and architectural
                        wonders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/locations"
              className="group relative block max-h-min bg-black bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url(https://i0.wp.com/www.tripstodiscover.com/wp-content/uploads/2016/07/bigstock-Beautiful-view-of-Palau-island-86974844.jpg?resize=784%2C588)",
              }}
            >
              <div className=" hero-overlay bg-opacity-50 rounded-xl">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl text-white sm:text-3xl text-center font-bold">
                    Oceania
                  </p>

                  <div className="mt-4">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Known for pristine landscapes, Oceania invites travelers
                        to explore stunning islands and friendly communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/locations"
              className="group relative block max-h-min bg-black bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url(https://i.natgeofe.com/n/cb160852-0cbe-402c-883a-a18e6cbe32dd/6647.jpg?w=1084.125&h=813.75)",
              }}
            >
              <div className=" hero-overlay bg-opacity-50 rounded-xl">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl text-white sm:text-3xl text-center font-bold">
                    South America
                  </p>

                  <div className="mt-4">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Known for beatiful views and history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/locations"
              className="group relative block max-h-min bg-black bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  'url("https://hips.hearstapps.com/hmg-prod/images/long-boat-docked-on-beach-in-krabi-thailand-summers-royalty-free-image-1622044679.jpg")',
              }}
            >
              <div className=" hero-overlay bg-opacity-50 rounded-xl">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl text-white sm:text-3xl text-center font-bold">
                    View All
                  </p>

                  <div className="mt-4">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Our most popular destinations for digital nomads this
                        month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="py-16 bg-yellow-50 "></div>
    </main>
  );
}
