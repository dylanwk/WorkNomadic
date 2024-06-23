"use client";

import { useMemo } from "react";
import Offers from "../categories/Offers";
import LocationCard from "./LocationCard";
import { IconType } from "react-icons/lib";
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  description: string;
  descriptors: { label: string; icon: IconType; description: string }[];

  locationValue: string;
  location: string;
  amenities: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description,
  descriptors,
  locationValue,
  location,
  amenities,
}) => {
  const parsed_description = description.replace("Description: ", "");

  return (
    <div className="col-span-4 flex flex-col gap-8 ">
      <div className="text-lg font-light text-neutral-500">
        {parsed_description}
      </div>

      <hr />
      <p className="text-xl font-semibold -mb-2">
        Users have rated this space as
      </p>
      {descriptors && (
        <>
          {descriptors.map((item, index) => (
            <div key={index}>
              <ListingCategory
                icon={item.icon}
                label={item.label}
                description={item.description}
              />
            </div>
          ))}
        </>
      )}
      <hr />
      <LocationCard location={location} locationData={locationValue} />
      <hr />
      <Offers amenities={amenities} />

      <hr />
    </div>
  );
};

export default ListingInfo;
