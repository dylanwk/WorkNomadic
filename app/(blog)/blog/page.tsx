import ArticleItemList from './ArticleListItem';
import { Button } from '@/components/ui/button';
import { getCategorizedArticles } from '@/lib/articles';
import Link from 'next/link';

export default function Blog() {
  const articles = getCategorizedArticles();

  return (
    <>
      <section className="bg-[url(/images/patagonia-pic.png)] bg-cover bg-bottom bg-no-repeat bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-52">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Want to be a Digital Nomad? 🌍
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-10 lg:px-40">
            Curious how you can master surfing in Costa Rica while still
            excelling in your professional career? Get the latest tips on remote
            work and travel from around the globe.
          </p>
        </div>
      </section>

      {/*-- <!--Container--> --*/}
      <div className="max-w-screen-xl px-4 md:px-4 mx-auto -mt-32">
        <div className="mx-4 sm:mx-4">
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

        <div className="flex w-full items-center font-sans p-8 md:p-14">
          <div className="w-10 h-10 rounded-full mr-4 text-4xl">🌴</div>

          <div className="flex-1">
            <p className="font-bold text-base md:text-xl leading-none mr-6">
              Want to write for us?
            </p>
            <p className="text-gray-600 text-xs md:text-base hidden sm:block">
              Share your expert tips and city guides! Join Vagaspace as a writer
              and help others discover new destinations.{' '}
            </p>
          </div>
          <div className="justify-end">
            <Link href="/blog/write-for-us">
              <Button className="bg-transparent border border-primary text-xs text-gray-500 hover:text-white font-bold py-2 px-4 rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
