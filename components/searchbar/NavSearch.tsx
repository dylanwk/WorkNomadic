"use client";

import useCountires from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const NavSearch = () => {
  const searchModal = useSearchModal();

  const params = useSearchParams();
  const { getByValue } = useCountires();

  const locationValue = params?.get("locationValue");
  const guestCount = params?.get("guestCount");
  const categories = params
    ?.get("category")
    ?.split(",")
    .filter((category) => category !== "");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [locationValue, getByValue]);

  const guestLabel = useMemo(() => {
    if (guestCount && guestCount !== "1" && guestCount !== "0") {
      return `${guestCount} Guests`;
    } else if (guestCount && guestCount === "1") {
      return `${guestCount} Guest`;
    }

    return "Add Guests";
  }, [guestCount]);

  const categoryLabel = useMemo(() => {
    if (categories?.length === 1) {
      return `${categories[0]}`;
    }

    if (categories && categories?.length > 1) {
      return `${categories[0]}...`;
    }

    return "Customize";
  }, [categories]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="ml-2 border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-8">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          {guestLabel}
        </div>
        <div className="text-sm font-semibold pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{categoryLabel}</div>
          <div className="p-2 bg-primary rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
