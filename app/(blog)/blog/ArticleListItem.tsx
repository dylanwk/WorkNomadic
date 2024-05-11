import Link from "next/link";
import type { ArticleItem } from "@/lib/types";
import Image from "next/image";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ articles, category }: Props) => {
  return (
    <>
      {articles.map((article, id) => (
        <div
          key={id}
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
        >
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg">
            <Link
              href={`/blog/${article.id}`}
              key={id}
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <Image
                className="h-64 w-full rounded-t pb-6"
                src={article.image}
                height={500}
                width={500}
                blurDataURL="data..."
                placeholder="blur"
                loading="lazy"
                alt="destination"
              />
              <div className="flex items-center justify-between w-full px-6 pb-2">
                <p className="text-gray-600 text-xs md:text-sm">
                  {/*-- category --*/}
                  {category}
                </p>
                <time className="block text-xs md:text-sm text-gray-600">
                  {/*-- date --*/}
                  {article.date}
                </time>
              </div>
              <div className="w-full font-bold text-xl text-gray-900 px-6 pb-2">
                {/*-- title --*/}
                {article.title}
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                {/*-- small description --*/}
                This paragrpah is about digital nomad lifestyle. This is a good
                lifestyle that not a lot of people know. Please read.
              </p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticleItemList;
