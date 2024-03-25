import ArticleItemList from '@/components/ArticleListItem';
import { getCategorizedArticles } from '@/lib/articles';
import React from 'react';

const Blog = () => {
  const articles = getCategorizedArticles();

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-light text-6xl text-center">
        <h1>Minimal Blog</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList category={article} articles={articles[article]} key={article}/>
          ))}
      </section>
    </section>
  );
};

export default Blog;
