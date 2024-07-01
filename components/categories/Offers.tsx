"use client";

import { useMemo } from "react";
import { BsFire } from "react-icons/bs";
import { AiOutlineWifi, AiOutlineCar, AiOutlineSafety } from "react-icons/ai";
import {
  MdOutlineCoffeeMaker,
  MdOutlineBathtub,
  MdOutlineKitchen,
  MdOutlineAir,
  MdOutlineElevator,
} from "react-icons/md";
import { BiCctv, BiBook } from "react-icons/bi";
import { GrWorkshop, GrStorage } from "react-icons/gr";
import { RiSafeLine, RiTvLine } from "react-icons/ri";
import {
  FaFireExtinguisher,
  FaLeaf,
  FaMountain,
  FaWater,
  FaCity,
  FaDog,
  FaTree,
} from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";

const categories = [
  {
    label: "Garden view",
    icon: FaLeaf,
  },
  {
    label: "Hot water",
    icon: BsFire,
  },
  {
    label: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Coffee",
    icon: MdOutlineCoffeeMaker,
  },
  {
    label: "Security cameras on property",
    icon: BiCctv,
  },
  {
    label: "Bathtub",
    icon: MdOutlineBathtub,
  },
  {
    label: "Dedicated Workspace",
    icon: GrWorkshop,
  },
  {
    label: "Safe",
    icon: RiSafeLine,
  },
  {
    label: "Free parking on premises",
    icon: AiOutlineCar,
  },
  {
    label: "Fire extinguisher",
    icon: FaFireExtinguisher,
  },
  {
    label: "High-Speed wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Ocean view",
    icon: FaWater,
  },
  {
    label: "Waterfront Location",
    icon: FaWater,
  },
  {
    label: "City view",
    icon: FaCity,
  },
  {
    label: "Mountain View",
    icon: FaMountain,
  },
  {
    label: "Patio",
    icon: MdOutlineKitchen,
  },
  {
    label: "Outdoor space",
    icon: FaTree,
  },
  {
    label: "Free parking",
    icon: AiOutlineCar,
  },
  {
    label: "Kitchen",
    icon: MdOutlineKitchen,
  },
  {
    label: "Kitchenette",
    icon: IoFastFoodOutline,
  },
  {
    label: "Books",
    icon: BiBook,
  },
  {
    label: "Secure Storage",
    icon: GrStorage,
  },
  {
    label: "Fireplace",
    icon: BsFire,
  },
  {
    label: "Pet friendly",
    icon: FaDog,
  },
  {
    label: "Fire extinguisher",
    icon: FaFireExtinguisher,
  },
  {
    label: "Carbon monoxide alarm",
    icon: AiOutlineSafety,
  },
  {
    label: "Smart TV",
    icon: FiSmartphone,
  },
  {
    label: "TV",
    icon: RiTvLine,
  },
  {
    label: "Dining Room",
    icon: IoFastFoodOutline,
  },
  {
    label: "Living Room",
    icon: MdOutlineKitchen,
  },
  {
    label: "Air Conditioning",
    icon: MdOutlineAir,
  },
  {
    label: "Open floor plan",
    icon: MdOutlineKitchen,
  },
  {
    label: "Washing Machine",
    icon: MdOutlineKitchen,
  },
  {
    label: "Elevator",
    icon: MdOutlineElevator,
  },
];

interface OffersProps {
  amenities: string;
}

interface Category {
  label: string;
  icon: IconType;
}

const Offers: React.FC<OffersProps> = ({ amenities }) => {
  const splitAmenities = amenities.split(",");

  const isDefined = <T,>(item: T | undefined): item is T => item !== undefined;

  const validAmenities = useMemo<Category[]>(() => {
    return splitAmenities
      .map((amenity) => {
        return categories.find(
          (category) =>
            category.label.toLowerCase() === amenity.trim().toLowerCase(),
        );
      })
      .filter(isDefined);
  }, [splitAmenities, categories]);

  const maxAmenities = validAmenities.slice(0, 10);
  const offersRowOne = maxAmenities.slice(0, 5);
  const offersRowTwo = maxAmenities.slice(5, 10);

  return (
    <div>
      <p className="text-xl font-semibold">Notable Amenities</p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-2">
          {offersRowOne.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item?.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {offersRowTwo.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
