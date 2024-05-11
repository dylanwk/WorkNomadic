
import Image from 'next/image';

import useCountires from "@/app/hooks/useCountries";
import React from "react";
import Heading from "../modals/Heading";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
}) => {
  const { getByValue } = useCountires();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading title={title} subtitle={`${location?.region}, ${location?.label}`}/>
      <div className="w-full h-[65vh] overflow-hidden rounded-xl relative">
        <Image alt="destination image" src={imageSrc} fill className='object-cover w-full object-bottom'/>
      </div>
    </>
  );
};

export default ListingHead;
