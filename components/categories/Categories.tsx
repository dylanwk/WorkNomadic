"use client";
import React from "react";
import {
  TbBeach,
  TbBuildingSkyscraper,
  TbPool,
  TbSunset2,
} from "react-icons/tb";
import { MdCoffee, MdOutlineBalcony, MdOutlineDiamond } from "react-icons/md";
import { PiDesktopTower, PiWarehouse } from "react-icons/pi";
import Container from "../Container";
import { GiWifiRouter } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Balconies",
    icon: MdOutlineBalcony,
  },
  {
    label: "Cafés Nearby",
    icon: MdCoffee,
    description: "This property is close to cafés!",
  },
  {
    label: "Coastal",
    icon: TbBeach,
    description: "This property is on the coast!",
  },
  {
    label: "Design",
    icon: PiWarehouse,
    description: "This property is near a ski slope",
  },
  {
    label: "Downtown",
    icon: TbBuildingSkyscraper,
    description: "This property is on the countryside!",
  },
  {
    label: "High-Speed Wifi",
    icon: GiWifiRouter,
  },
  {
    label: "Luxury",
    icon: MdOutlineDiamond,
    description: "This property is luxurious",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Scenic",
    icon: TbSunset2,
    description: "This property has a scenic view!",
  },
  {
    label: "Workspaces",
    icon: PiDesktopTower,
    description: "This property has a dedicated workspace",
  },
];

const Categories: React.FC = () => {
  const params = useSearchParams();
  const category = params?.get("category")?.split(",");

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category?.includes(item.label)}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
