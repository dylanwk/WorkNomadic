import { Listing } from "@prisma/client";
import { TbBeach, TbFlame, TbSunset2 } from "react-icons/tb";
import {
  GiForest,
  GiGreenhouse,
  GiMonsteraLeaf,
  GiBonsaiTree,
  GiArchBridge,
  GiModernCity,
  GiEgyptianSphinx,
  GiCableStayedBridge,
  GiGreekTemple,
} from "react-icons/gi";
import {
  FaWater,
  FaCity,
  FaMountain,
  FaSpa,
  FaPaintBrush,
  FaGlassMartini,
} from "react-icons/fa";
import {
  MdOutlineVilla,
  MdOutlineWbSunny,
  MdOutlineTempleBuddhist,
  MdOutlineKingBed,
  MdOutlineCabin,
} from "react-icons/md";
import { LiaTractorSolid } from "react-icons/lia";
import { RiPolaroid2Line, RiTreasureMapLine } from "react-icons/ri";
import { PiCampfire, PiTreePalm, PiWarehouse, PiWine } from "react-icons/pi";
import { LuWarehouse } from "react-icons/lu";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaMartiniGlassCitrus } from "react-icons/fa6";

export const descriptors = [
  {
    label: "Rustic",
    icon: MdOutlineCabin,
    description: "This property has a rustic charm.",
  },
  {
    label: "Waterfront",
    icon: FaWater,
    description: "This property is located by the water.",
  },
  {
    label: "Historic",
    icon: GiGreekTemple,
    description: "This property has historical significance.",
  },
  {
    label: "Scenic",
    icon: TbSunset2,
    description: "This property offers scenic views.",
  },
  {
    label: "Countryside",
    icon: LiaTractorSolid,
    description: "This property is in the countryside.",
  },
  {
    label: "Vintage",
    icon: RiPolaroid2Line,
    description: "This property has a vintage style.",
  },
  {
    label: "Industrial",
    icon: PiWarehouse,
    description: "This property has an industrial feel.",
  },
  {
    label: "Cozy",
    icon: PiCampfire,
    description: "This property is cozy and comfortable.",
  },
  {
    label: "Tropical",
    icon: PiTreePalm,
    description: "This property has a tropical vibe.",
  },
  {
    label: "Secluded",
    icon: GiForest,
    description: "This property is secluded for privacy.",
  },
  {
    label: "Artistic",
    icon: FaPaintBrush,
    description: "This property has an artistic touch.",
  },
  {
    label: "Spacious",
    icon: MdOutlineKingBed,
    description: "This property is spacious.",
  },
  {
    label: "Sustainable",
    icon: GiGreenhouse,
    description: "This property is eco-friendly.",
  },
  {
    label: "Beachfront",
    icon: TbBeach,
    description: "This property is located on the beach.",
  },
  {
    label: "Villa",
    icon: MdOutlineVilla,
    description: "This property is a villa.",
  },
  {
    label: "Lush",
    icon: GiMonsteraLeaf,
    description: "This property is surrounded by lush greenery.",
  },
  {
    label: "Minimalist",
    icon: LuWarehouse,
    description: "This property has a minimalist design.",
  },
  {
    label: "Romantic",
    icon: PiWine,
    description: "This property has a romantic ambiance.",
  },
  {
    label: "Panoramic",
    icon: MdOutlineWbSunny,
    description: "This property offers panoramic views.",
  },
  {
    label: "Riverfront",
    icon: FaWater,
    description: "This property is located by a river.",
  },
  {
    label: "Cultural",
    icon: MdOutlineTempleBuddhist,
    description: "This property is in a cultural area.",
  },
  {
    label: "Nightlife",
    icon: FaMartiniGlassCitrus,
    description: "This property is close to nightlife activities.",
  },
  {
    label: "Oasis",
    icon: FaSpa,
    description: "This property is a tranquil oasis.",
  },
  {
    label: "Walkable",
    icon: IoTrailSignOutline,
    description: "This property is in a walkable area.",
  },
  {
    label: "Trendy",
    icon: TbFlame,
    description: "This property is currently trending.",
  },
  {
    label: "Downtown",
    icon: FaCity,
    description: "This property is located downtown.",
  },
  {
    label: "Mountainous",
    icon: FaMountain,
    description: "This property is in a mountainous area.",
  },
  {
    label: "Adventurous",
    icon: RiTreasureMapLine,
    description: "This property is perfect for adventure seekers.",
  },
  {
    label: "Tranquil",
    icon: GiBonsaiTree,
    description: "This property offers tranquility.",
  },
  {
    label: "Architectural",
    icon: GiModernCity,
    description: "This property has notable architecture.",
  },
  {
    label: "Innovative",
    icon: GiArchBridge,
    description: "This property features innovative design.",
  },
  {
    label: "Cityscape",
    icon: GiCableStayedBridge,
    description: "This property offers views of the cityscape.",
  },
];

export type DestinationItem = {
  location: string;
  description: string;
  imageURL: string;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
};

export type UserResponses = Record<string, string | number>;

export type Question = {
  id: string;
  label: string;
  type: "multiple-choice" | "open-ended";
  options?: string[];
  description?: string;
};

export const questions: Question[] = [
  {
    id: "Budget range per month for accommodation",
    label: "What is your budget range per month for accommodation?",
    type: "multiple-choice",
    options: ["$500 - $1000", "$1000 - $1500", "$1500 - $2500", "$3000+"],
  },
  {
    id: "Climate preference",
    label: "What type of climate do you prefer?",
    type: "multiple-choice",
    options: [
      "Warm and tropical",
      "Moderate and temperate",
      "Cool and Mountainous",
      "Varied, I like experiencing different climates",
    ],
  },
  {
    id: "Wifi Speed preference",
    label: "How important is access to reliable internet for your work?",
    type: "multiple-choice",
    options: [
      "Extremley important",
      "Important, but I can manage occasional outages",
      "Not very important",
    ],
  },
  {
    id: "Region Preference",
    label: "Which region or continent are you most interested in?",
    type: "multiple-choice",
    options: [
      "Aisa",
      "Europe",
      "North America",
      "South and Latin America",
      "Africa",
      "Oceania",
    ],
  },
  {
    id: "Require Amenities for trip",
    label: "What amenities are essential for your destination?",
    type: "open-ended",
    description: "e.g., coworking spaces, proximity to cafes, gyms, etc.",
  },
  {
    id: "Activity Present",
    label: "What activities are you interested in?",
    type: "open-ended",
    description: "e.g., hiking, site-seeing, skiing, nightlife, etc.",
  },
  {
    id: "Digital Nomad community presence",
    label:
      "Are you looking for a destination with a strong expat or digital nomad community?",
    type: "multiple-choice",
    options: ["Yes", "No", "No preference"],
  },
];
