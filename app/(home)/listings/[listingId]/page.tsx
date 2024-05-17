import getListingById from '@/app/api/actions/getListingById';
import EmptyState from '@/components/EmptyState';
import ListingSkeleton from '@/components/listings/ListingSkeleton';
import dynamic from 'next/dynamic';

const Listing = dynamic(() => import('./ListingClient'), {
  loading: () => <ListingSkeleton />
});

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  //const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <Listing listing={listing} />;
};

export default ListingPage;
