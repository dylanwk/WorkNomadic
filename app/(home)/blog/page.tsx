import ArticleItemList from '@/components/ArticleListItem';
import { getCategorizedArticles } from '@/lib/articles';
import React from 'react';

const Blog = () => {
  const articles = getCategorizedArticles();

  return (
    <>
      <section className="bg-[url(/images/patagonia-pic.png)] bg-cover bg-bottom bg-no-repeat bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-52">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Want to be a Digital Nomad? 🌍
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Curious how you can master surfing in Costa Rica while still
            excelling in your professional career? Get the latest tips on remote
            work and travel from around the globe.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
        </div>
      </section>

      {/*-- <!--Container--> --*/}
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            {/*-- <!--Posts Container--> --*/}
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {articles !== null &&
                Object.keys(articles).map((article) => (
                  <ArticleItemList
                    category={article}
                    articles={articles[article]}
                    key={article}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
