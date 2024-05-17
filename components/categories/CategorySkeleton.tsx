import Container from "../Container";
import { Skeleton } from "../ui/skeleton";

const CategorySkeleton = () => {
  return (
    <Container>
      <div className="pt-4 px-4 flex flex-col overflow-x-auto justify-between space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </Container>
  );
};

export default CategorySkeleton;
