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
      <div className="p-2 bg-gray-50"></div>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-44">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              A Travel Agency for Digital Nomads
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="destination"
          src="https://api.time.com/wp-content/uploads/2022/07/Worlds-Greatest-Places-2022-BaliIndonesia.jpeg?quality=85&w=1600"
          className="h-full w-full rounded-lg object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
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
                  'url(https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/11/17141542/cape-town-africa.jpeg)',
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
                      Known for rich cultural heritage, breathtaking landscapes, and diverse wildlife.
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
                  'url(https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg)',
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
                        Known for vibrant traditions, Aisa everyting from bustling metropolises to serene retreats.
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
                  'url(https://www.jetsetter.com//uploads/sites/7/2019/04/GettyImages-471662379-1380x1035.jpg)',
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
                      Known for its historic charm, Europe enchants it's travelers with centuries-old cultures and architectural wonders.

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
                  'url(https://i0.wp.com/www.tripstodiscover.com/wp-content/uploads/2016/07/bigstock-Beautiful-view-of-Palau-island-86974844.jpg?resize=784%2C588)',
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
                      Known for pristine landscapes, Oceania invites travelers to explore stunning islands and friendly communities.
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
                  'url(https://i.natgeofe.com/n/cb160852-0cbe-402c-883a-a18e6cbe32dd/6647.jpg?w=1084.125&h=813.75)',
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
