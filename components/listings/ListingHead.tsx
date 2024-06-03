import Image from "next/image";

import useCountires from "@/app/hooks/useCountries";
import React from "react";
import Heading from "../modals/Heading";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  roomCount,
  bathroomCount,
  guestCount,
}) => {
  const { getByValue } = useCountires();
  const location = getByValue(locationValue);

  return (
    <>
      <div className="w-full h-[65vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Destination Image"
          src={imageSrc}
          fill
          className="object-cover w-full object-bottom"
          loading="lazy"
        />
      </div>
      <Heading title={title} />
      <div className=" -mt-5 flex flex-row items-center gap-3 font-light text-neutral-500">
        <div>{guestCount} guests</div>•<div>{roomCount} rooms </div>•
        <div>{bathroomCount} bathrooms </div>
      </div>
    </>
  );
};

export default ListingHead;
