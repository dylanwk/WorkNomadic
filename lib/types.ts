import { Listing } from "@prisma/client";

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
