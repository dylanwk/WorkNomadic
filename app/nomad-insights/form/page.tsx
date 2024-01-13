"use client";

import React from "react";
import QuestionForm, {
  Question,
  UserResponses,
} from "@/app/components/Question";
import { useState } from "react";
import SuccessPage from "./success-page/page";
//import { exportData } from "@/app/utils/exportData";

interface ParentProps {
  userResponses: UserResponses
}

const Home: React.FC<ParentProps> = ({ userResponses }) => {
  const questions: Question[] = [
    { id: "Current Location", 
      label: "Current Location 🌎", 
      type: "open-ended",
      description: "example: US" 
    },
    {
      id: "Region Preference",
      label: "Which do you perfer? ",
      type: "multiple-choice",
      options: ["Oceania 🏄‍♂️", "South America 🌴", "Europe 🇪🇺", "North America 🌲", "Aisa ⛩", "Africa 🦒", "Middle East 🐪"],
    },
    {
      id: "Must Have",
      label: "A must-need for your trip?",
      type: "open-ended",
      description: "ex: coffee shops, bars, etc."
    },
    {
      id: "Activity Present",
      label: "What activity do you enjoy?",
      type: "open-ended",
      description: "ex: surfing, hiking, nightlife, etc."
    },
    {
      id: "Plant Tikcet budget one way",
      label: "Plane Ticket budget (one way) ✈️",
      type: "multiple-choice",
      options: ["<300", "400", ">500"],
    },
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (userResponses: UserResponses) => {
    try {
      setSubmitted(true);
      //exportData(questions, userResponses) -> exported from question form
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {submitted ? (
        <SuccessPage userResponses={userResponses} />
      ) : (
        <QuestionForm questions={questions} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Home;
