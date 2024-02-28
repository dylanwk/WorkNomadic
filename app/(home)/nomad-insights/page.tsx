import React from 'react';
import Link from 'next/link';

const InsightPage = () => {
  return (
    <>
      <section className="bg-yellow-50">
        <div className="mx-auto max-w-screen-3xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Use AI Technology.
              <span className="sm:block"> Locate Better Destinations. </span>
            </h1>
            <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 "></div>
                <h3 className="mb-2 text-2xl font-bold ">
                  Tailored Recommendations
                </h3>
                <p className="text-gray-500 ">
                  By understanding preferences such as activities and budget,
                  our algorithm generates customized recommendations, ensuring a
                  more enjoyable trip.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 "></div>
                <h3 className="mb-2 text-2xl font-bold ">
                  Discover Hidden Gems
                </h3>
                <p className="text-gray-500 ">
                  Our TRS highlights hidden gems and lesser-known destinations
                  that match user preferences. By considering a variety of
                  factors, users can discover new and exciting places that align
                  with their interests.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 "></div>
                <h3 className="mb-2 text-2xl font-bold ">
                  Effortless Planning
                </h3>
                <p className="text-gray-500 ">
                  With our TRS, travel planning becomes effortless. By answering
                  a few questions, users receive tailored recommendations,
                  eliminating the need for extensive research.
                </p>
              </div>
            </div>

            <div className=" flex flex-wrap justify-center gap-4">
              <Link href="/nomad-insights/form">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-3 me-2 mb-2 mt-10 "
                >
                  {' '}
                  Start{' '}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightPage;
