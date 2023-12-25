// currentInfo/page.tsx

"use client";

import React from "react";
import QuestionForm, {
  Question,
  UserResponses,
} from "@/app/components/Question";
import { useState } from "react";
import Page from "./success-page/page";

const Home: React.FC = () => {
  const questions: Question[] = [
    { id: "question1", 
      label: "Current Location 🌎", 
      type: "open-ended",
      description: "example: US" 
    },
    {
      id: "question2",
      label: "Which do you perfer? ",
      type: "multiple-choice",
      options: ["Oceania 🏄‍♂️", "South America 🌴", "Europe 🇪🇺", "North America 🌲", "Aisa ⛩", "Africa 🦒", "Middle East 🐪"],
    },
    {
      id: "question3",
      label: "A must-need for your trip?",
      type: "open-ended",
      description: "ex: coffee shops, bars, etc."
    },
    {
      id: "question4",
      label: "What activity do you enjoy?",
      type: "open-ended",
      description: "ex: surfing, hiking, nightlife, etc."
    },
    {
      id: "question5",
      label: "Plane Ticket budget (one way) ✈️",
      type: "multiple-choice",
      options: ["<300", "400", ">500"],
    },
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (userResponses: UserResponses) => {
    try {
      // handle user data here
      console.log(userResponses);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {submitted ? (
        <Page />
      ) : (
        <QuestionForm questions={questions} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Home;
