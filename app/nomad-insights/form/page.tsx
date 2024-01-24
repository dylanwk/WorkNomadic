"use client";

import React from "react";
import QuestionForm, {
  Question,
  UserResponses,
} from "@/app/components/Question";
import { useState } from "react";
import SuccessPage from "./success-page/page";
import { exportData } from "@/app/utils/exportData";

/* The flow of User's Responses

-> Answers from Quesiton.tsx populate userResponse once form is finished
  ->  Home.handleFormSubmit is passed to Question.tsx through prop "onSubmit" and is called when form is finshed
    -> Home.handleFormSubmit calls setUserResponses which populates updatedUserResponses
      -> updatedUserResponses is sent to success-page ONLY if submitted is true (need to fix error handling)

*/


const Home: React.FC = () => {
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

  const [userResponses, setUserResponses] = useState<UserResponses>({}); // new export logic
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (updatedUserResponses: UserResponses) => {
    try {
      setUserResponses(updatedUserResponses);
      setSubmitted(true);
      exportData(questions, updatedUserResponses);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      {submitted ? (
        <SuccessPage responses={userResponses} />
      ) : (
        <QuestionForm questions={questions} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Home;
