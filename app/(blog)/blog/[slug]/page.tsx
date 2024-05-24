import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { getArticleData } from '@/lib/articles';

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-8 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row justify-between items-center font-bold">
        <Link href={'/blog'} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p className="text-sm">Back to Home</p>
        </Link>
        <p className="text-sm">{articleData.date}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;
