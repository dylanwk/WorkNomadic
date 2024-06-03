"use client";

import dynamic from "next/dynamic";

import useCountries from "@/app/hooks/useCountries";
import { IconType } from "react-icons/lib";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import Offers from "../categories/Offers";
import LocationCard from "./LocationCard";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8 ">
      <div className="text-lg font-light text-neutral-500">{description}</div>

      <hr />
      <p className="text-xl font-semibold -mb-2">
        Users have rated this space as
      </p>
      {category && (
        <>
          <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description || ""}
          />
          <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description || ""}
          />
        </>
      )}
      <hr />
      <Offers />
      <hr />
      <LocationCard location={""} locationData={""} />
      <hr />
    </div>
  );
};

export default ListingInfo;
