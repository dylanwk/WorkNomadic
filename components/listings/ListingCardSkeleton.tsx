"use client";

import { Skeleton } from "../ui/skeleton";

const ListingCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="w-3/4 py-3 rounded-lg mt-1" />
    </div>
  );
};

export default ListingCardSkeleton;
