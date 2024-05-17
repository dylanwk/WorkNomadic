"use client";

import Container from "../Container";
import { Skeleton } from "../ui/skeleton";

const ListingSkeleton = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <Skeleton className="py-4 w-1/4 justify-start"></Skeleton>
          </div>
          <div className="w-full h-[65vh] overflow-hidden rounded-xl relative">
            <Skeleton className="w-full h-full"></Skeleton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingSkeleton;
