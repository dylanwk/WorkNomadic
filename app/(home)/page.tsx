import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import Searchbar from '@/components/searchbar/Searchbar';
import getListings, { IListingParams } from '../api/actions/getListings';
import ListingCard from '@/components/listings/ListingCard';
import CategorySkeleton from '@/components/categories/CategorySkeleton';
import Image from 'next/image';
import Categories from '@/components/categories/Categories';

interface HomeProps {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);

  // TODO: add currentUser funcitonality
  const currentUser = null;

  return (
    <>
      <section className="relative px-4 py-10 overflow-hidden bg-black sm:py-16 md:py-25 lg:py-28 xl:py-40">
        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full scale-200 object-left opacity-80"
            src="/images/rio2.jpg"
            alt="Rio de Janiero"
            fill
            sizes="100vw"
            priority
            quality={100}
          />
        </div>

        <div className="flex justify-center px-4 mx-auto max-w-7xl text-center pb-8 -mt-4">
          <Searchbar />
        </div>

        <div className="absolute bottom-0 left-0 pb-4 pl-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none">
            Tailored to Nomads <br className="hidden xl:block" />
            Like You.
          </h1>
        </div>
      </section>
      {/* <Categories /> */}
      <Categories />
      {listings && listings.length === 0 ? (
        <EmptyState showReset />
      ) : (
        <Container>
          <div className="min-h-screen pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings &&
              listings.map((listing: any) => {
                return (
                  <ListingCard
                    key={listing.id}
                    data={listing}
                    currentUser={currentUser}
                  />
                );
              })}
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
