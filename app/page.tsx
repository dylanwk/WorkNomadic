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
          <div className="mr-auto px-3 pr-8 place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
              Destinations for Digital Nomads.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
              We are a travel agency designed for remote workers.
            </p>
            <a
              href="#"
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
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
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
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <div className="pt-24 bg-yellow-50"></div>

      <section className="bg-yellow-50 text-gray-700">
        <div className="container max-w-xl p-6 py-10 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-4xl text-gray-900">
              Why Nomad Page?
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-2 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Work-Friendly Accomidations
                    </h4>
                    <p className="mt-2 ">
                      We provide accommodations with dedicated workspaces,
                      high-speed internet, and amenities that cater to remote
                      work needs.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Visa Assistance
                    </h4>
                    <p className="mt-2 ">
                      We help you navigate the complexities of
                      working remotely from different locations.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Number 4
                    </h4>
                    <p className="mt-2">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://source.unsplash.com/random/360x480"
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="p-12 bg-gray-50"></div>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
              Not your ordinary Travel Agency
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              We are dedicated to providing the best experience to our users.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
              <div className="flex flex-col px-3 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500"></dt>

                <dd className="text-xl font-extrabold text-emerald-600 md:text-3xl">
                  AI-Backed Research
                </dd>
              </div>

              <div className="flex flex-col px-3 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500"></dt>

                <dd className="text-xl font-extrabold text-emerald-600 md:text-3xl">
                  No Markup Pricing
                </dd>
              </div>

              <div className="flex flex-col px-3 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500"></dt>

                <dd className="text-xl font-extrabold text-emerald-600 md:text-3xl">
                  Custom Destinations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore Locations 🌎
            </h2>

            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="#"
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
              href="#"
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
              href="#"
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
                        Known for its historic charm, Europe enchants it's
                        travelers with centuries-old cultures and architectural
                        wonders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#"
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
              href="#"
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
              href="#"
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

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:py-40 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">
              AI Technology means
              <strong className="font-bold text-emerald-700 sm:block">
                {" "}
                Better Destinations.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Our AI-based recommendation system analyzes your preferences,
              providing curated destinations for work and adventure.{" "}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Get Started with Nomad Insights
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 bg-gray-50"></div>
    </main>
  );
}
