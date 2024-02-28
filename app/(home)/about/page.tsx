import React from 'react';

const About = () => {
  return (
    <section className="bg-yellow-50">
      <div className="pt-16"></div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-gray-900">
            More Than a Search Bar: Tailored for Digital Nomads
          </h2>

          <p className="mb-4 font-light">
            Nomad Page specializes in housing that goes beyond expectations.
            Each space is carefully selected, ensuring it aligns with the
            demands of remote workers. We know that work is a vital part of your
            adventure. Our accommodations come with features like high-speed
            internet and close proximity to dedicated workspaces.
          </p>
        </div>
      </div>
      <div className="p-2"></div>

      <section className="pb-20">
        <div className="gap-6 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-10 md:grid md:grid-cols-2 sm:py-16 lg:px-4">
          <img
            className="w-full rounded-lg"
            src="https://www.touristcardmx.com/user/sites/www.touristcardmx.com/pages/03.news/mexico-digital-nomad-visa/mexico-digital-nomad-visa.jpg"
            alt="dashboard image"
          />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ">
              Creating a world where anyone can live their lives with the
              freedom to work and life anywhere.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
              Nomad Page is focusing on crafting a world where individuals can
              truly live their best lives, unrestrained by conventional
              boundaries. We believe in the freedom to work and live anywhere,
              and our commitment is to make this vision a reality for you.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-yellow-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              Join the Remote Work Revolution
            </h2>
            <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl ">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-600 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 "
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">
                We care about the protection of your data.{' '}
                <a
                  href="#"
                  className="font-medium text-blue-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="py-16"></div>
    </section>
  );
};

export default About;
