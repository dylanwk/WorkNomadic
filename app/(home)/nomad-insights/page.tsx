import React from "react";
import Link from "next/link";

const InsightPage = () => {
  return (
    <>
      <section className="bg-yellow-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-700 via-green-600 to-green-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Use AI Technology.
              <span className="sm:block"> Locate Better Destinations. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-lg/relaxed">
              Nomad Insights leverages text-based AI models to better understand
              your preferences, enabling the detection of destinations that
              align more closely with your needs.
            </p>

            <div className=" flex flex-wrap justify-center gap-4">
              <div className="mx-auto max-w-screen-3xl px-4 py-2 sm:px-6 lg:px-8">

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
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default InsightPage;
