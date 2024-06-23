import Image from "next/image";

import React from "react";
import Heading from "../modals/Heading";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  bedCount: number;
  bathroomCount: number;
  guestCount: number;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  bedCount,
  bathroomCount,
  guestCount,
}) => {
  return (
    <>
      <div className="w-full h-[70vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Destination Image"
          src={imageSrc}
          fill
          className="object-cover w-full object-bottom"
        />
      </div>
      <Heading title={title} />
      <div className=" -mt-5 flex flex-row items-center gap-3 font-light text-neutral-500">
        <div>{guestCount} guests</div>•<div>{bedCount} bedroom </div>•
        <div>{bathroomCount} bathrooms </div>
      </div>
    </>
  );
};

export default ListingHead;
