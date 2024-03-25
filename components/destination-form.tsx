"use client";

import { UserResponses, questions } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "./ui/button";

export default function DestinationForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<UserResponses>({});

  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      handleNextQuestion();
    } else {
      const queryParams = new URLSearchParams();

      // Append id and value for each question to the query parameters
      questions.forEach((question) => {
        const value = userResponses[question.id];
        if (value !== undefined) {
          queryParams.append(question.id, value.toString());
        }
      });

      router.push(`/nomad-insights/destination?${queryParams.toString()}`);
    }
  };

  const handleOpenEndedChange = (value: string) => {
    setUserResponses({
      ...userResponses,
      [currentQuestion.id]: value,
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="bg-gray-100 rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
          <div className="mx-auto max-w-md text-center p-2">
            <h1 className="text-2xl font-bold sm:text-3xl">
              {currentQuestion.label}
            </h1>
          </div>

          {currentQuestion.type === "open-ended" && (
            <div>
              <label htmlFor={currentQuestion.id} className="sr-only">
                {currentQuestion.label}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id={currentQuestion.id}
                  placeholder={currentQuestion.description}
                  className="w-full rounded-lg border-gray-200 p-2 sm:p-4 text-sm sm:text-base shadow-sm"
                  value={userResponses[currentQuestion.id] || ""}
                  onChange={(e) => handleOpenEndedChange(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {currentQuestion.type === "multiple-choice" && (
            <div>
              <label htmlFor={currentQuestion.id} className="sr-only">
                {currentQuestion.label}
              </label>
              <select
                id={currentQuestion.id}
                className="w-full bg-gray-50 border border-gray-300 text-sm sm:text-base rounded-lg focus:ring-primary focus:border-primary p-2 sm:p-4 shadow-sm"
                value={userResponses[currentQuestion.id] || ""}
                onChange={(e) =>
                  setUserResponses({
                    ...userResponses,
                    [currentQuestion.id]: e.target.value,
                  })
                }
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                {currentQuestion.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex items-center justify-center py-2">
            <Button type="submit" size="default">
              {currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Get Recommendation"}
            </Button>
          </div>
        </form>
      </section>
    </DndProvider>
  );
}

export type { UserResponses };
