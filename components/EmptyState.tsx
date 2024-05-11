"use client";

import { useRouter } from "next/navigation";
import Heading from "./modals/Heading";
import { Button } from "./ui/button";

interface EmptyStateInterface {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateInterface> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filter options",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className=" flex w-48 mt-4 justify-center items-center">
        {showReset && (
          <Button
            variant={"outline"}
            aria-label="Remove all filters"
            onClick={() => router.push("/")}
            className="items-center justify-center rounded-full border-red-500"
          >
            Remove all filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
