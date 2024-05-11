"use client";
import React from "react";
import {
  TbBeach,
  TbBuildingSkyscraper,
  TbMountain,
  TbPool,
  TbSunset2,
  TbWindmill,
} from "react-icons/tb";
import { MdCoffee } from "react-icons/md";
import { PiCoffee } from "react-icons/pi";
import { FaSkiing } from "react-icons/fa";
import Container from "../Container";
import { GiBoatFishing, GiCastle, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Scenic",
    icon: TbSunset2,
    description: "This property has a scenic view!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Urban",
    icon: TbBuildingSkyscraper,
    description: "This property is on the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Cafés Nearby",
    icon: MdCoffee,
    description: "This property is close to cafés!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is near a ski slope",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },
];

const Categories: React.FC = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 px-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
