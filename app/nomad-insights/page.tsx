import React from "react";
import Link from "next/link";

const InsightPage = () => {
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
              Nomad Insights leverages text-based AI models to better understand
              your preferences, enabling the detection of destinations that
              align more closely with your interests.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-32 justify-end">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="mockup-window border bg-base-300">
              <div className="flex justify-center px-4 py-16 bg-base-200">
                Hello!
              </div>
            </div>

            <div className="relative flex items-center bg-gray-200">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-200"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Your preferences, your budget, your perfect destination.
                </h2>

                <p className="mt-4 text-gray-600">
                  Fill in your stuff for the full effect
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
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

export default InsightPage;
