import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingPage = () => {
  return (
    <section className="bg-background min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="grid gap-4 items-center md:grid-cols-2">
          <div className="w-full rounded-lg">
            <Skeleton className="h-[400px] w-[500px] rounded-lg" />
          </div>
          <div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-16 w-[400px]" />
              <Skeleton className="h-8 w-[450px]" />
              <Skeleton className="h-8 w-[450px]" />
              <Skeleton className="h-8 w-[450px]" />
              <Skeleton className="h-8 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
