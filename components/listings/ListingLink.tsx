import React from "react";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import { Button } from "@/components/ui/button";

interface ListingCardProps {
  price: number;
  buttonImageSrc: string;
  listingLink: string;
}

const ListingLink: React.FC<ListingCardProps> = ({
  price,
  buttonImageSrc,
  listingLink,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row gap-1 justify-start">
          <div className="text-2xl font-semibold">$ {price}</div>
          <div className="font-light text-neutral-600 mt-1"> night</div>
        </div>
        <div>
          <div className="text-xl font-semibold">Interested?</div>
          <div className="text-lg font-light text-neutral-500 flex flex-col items-left gap-2">
            <div>
              This space can be found{" "}
              <a
                href={`https://${listingLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingLink;
