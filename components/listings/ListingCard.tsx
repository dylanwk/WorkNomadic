"use client";

import { Listing, User } from "@prisma/client";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingCard {
  data: Listing;
  currentUser?: User | null;
}

const ListingCard: React.FC<ListingCard> = ({ data, currentUser }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <a
        href={`/listings/${data.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2 w-full"
      >
        <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
          <Image
            alt="Listing"
            src={data.imageSrc}
            className="object-cover h-full w-full group-hover:scale-110 transition"
            fill
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg">{data.title}</div>
        <div className="font-light text-neutral-500 ">{data.location}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold ">$ {data.price}</div>
          <div className="font-light">night</div>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;
