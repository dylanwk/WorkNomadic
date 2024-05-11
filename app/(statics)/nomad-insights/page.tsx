import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NomadInsights = () => {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-screen-3xl px-4 py-16 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-3xl font-extrabold bg-clip-text sm:text-5xl">
              Use AI Technology.
              <span className="block sm:inline">
                {' '}
                Locate Better Destinations.{' '}
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 md:gap-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 lg:w-16 lg:h-16"></div>
                <h3 className="mb-2 text-2xl font-bold">
                  Tailored Recommendations
                </h3>
                <p className="text-gray-500">
                  By understanding preferences such as activities and budget,
                  our algorithm generates customized recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full lg:w-16 lg:h-16"></div>
                <h3 className="mb-2 text-2xl font-bold">
                  Discover Hidden Gems
                </h3>
                <p className="text-gray-500">
                  By considering a variety of factors, users can discover new
                  and exciting places that align with their interests.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 lg:w-16 lg:h-16"></div>
                <h3 className="mb-2 text-2xl font-bold">Effortless Planning</h3>
                <p className="text-gray-500">
                  By answering a few questions, users receive tailored
                  recommendations, eliminating the need for extensive research.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/nomad-insights/form">
                <Button className="mt-10" size="lg">
                  Discover Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="p-10"></div>
    </>
  );
};

export default NomadInsights;
