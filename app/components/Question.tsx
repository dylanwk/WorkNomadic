// Question.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { exportData } from "../utils/exportData";

type Question = {
  id: string;
  label: string;
  type: "open-ended" | "multiple-choice";
  options?: string[];
  description?: string;
};


type UserResponses = Record<string, string | number>;

interface QuestionFormProps {
  questions: Question[];
  onSubmit: (responses: UserResponses) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ questions, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<UserResponses>({});

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      handleNextQuestion();
    } else {
      onSubmit(userResponses); // question responses sent to page.tsx
      exportData(questions, userResponses); // data exported to exportData.tsx
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
      <div className="flex flex-col gap-4">
        <div className="card bg-base-100 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="card-body pb-7">
              <label>
                <h2 className="card-title p-6 text-3xl justify-center">
                  {currentQuestion.label}
                </h2>
                {currentQuestion.type === "open-ended" ? (
                  <div className="flex justify-center">
                  <input
                    type="text"
                    placeholder={currentQuestion.description}
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={userResponses[currentQuestion.id] || ""}
                    onChange={(e) => handleOpenEndedChange(e.target.value)}
                    required
                  />
                  </div>
                ) : currentQuestion.type === "multiple-choice" ? (
                  <div className="flex justify-center">
                  <select
                    className="select select-primary w-full max-w-xs"
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
                ) : null}
              </label>
            </div>
            <div className="card-actions justify-center pb-6">
              <button type="submit" className="btn btn-primary">
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Get Recommendation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DndProvider>
  );
};

export default QuestionForm;
export type { Question };
export type { UserResponses};
