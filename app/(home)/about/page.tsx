import React from 'react';

const About = () => {
  return (
    <section className="bg-background">
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
            alt="digital nomad"
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
    </section>
  );
};

export default About;
