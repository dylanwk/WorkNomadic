import React from "react";

const locations = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Use AI Technology.
              <span className="sm:block"> Locate Better Destinations. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-lg/relaxed">
              Nomad Insights uses text-based AI models to better understand
              your preferences, enabling the detection of better-fitting destinations.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/nomad-insights/form"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        

            <section className="">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img
                  className="w-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                  alt="dashboard image"
                />
                <img
                  className="w-full hidden dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                    Let's create more tools and ideas that brings us together.
                  </h2>
                  <p className="mb-6 font-light text-gray-500 md:text-lg ">
                    Flowbite helps you connect with friends and communities of
                    people who share your interests. Connecting with your
                    friends and family as well as discovering new ones is easy
                    with features like Groups.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                  >
                    Get started
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
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
                </div>
              </div>
            </section>
          
      </section>

      <section className="bg-gray-50 py-10 pb-15">
        <div className="mx-auto max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Get started with Nomad Insights.
            </h1>

            <p className="mt-3 text-gray-500">
              You only need an email. No Credit Card needed.
            </p>
          </div>
          <div className="flex flex-row mt-8 items-center self-center justify-center flex-shrink-0 lg:justify-center">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className=" w-full p-3 rounded-l-lg sm:w-4/5 bg-gray-200"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-indigo-600 text-white hover:bg-indigo-400 "
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default locations;
