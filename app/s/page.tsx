import Container from '@/components/Container';
import getListings, { IListingParams } from '../api/actions/getListings';
import EmptyState from '@/components/EmptyState';
import ListingCard from '@/components/listings/ListingCard';
import Categories from '@/components/categories/Categories';

interface SearchProps {
  searchParams: IListingParams;
}

export default async function s({ searchParams }: SearchProps) {
  const listings = await getListings(searchParams);

  return (
    <>
      <Container>
        <Categories />

        {listings && listings.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <div className="min-h-screen pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings &&
              listings.map((listing: any) => {
                return <ListingCard key={listing.id} data={listing} />;
              })}
          </div>
        )}
      </Container>
    </>
  );
}
