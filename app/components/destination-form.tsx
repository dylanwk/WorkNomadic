'use client';
import { questions, UserResponses } from '../lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
      [currentQuestion.id]: value
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="hero min-h-screen bg-gray-50 rounded-lg shadow-md">
        <div className="hero-content text-center">
          <form onSubmit={handleSubmit}>
            <div className="max-w-lg">
              <label>
                <h1 className="text-5xl font-bold py-3">
                  {currentQuestion.label}
                </h1>
                {currentQuestion.type === 'open-ended' ? (
                  <div className="flex justify-center p-3">
                    <input
                      type="text"
                      placeholder={currentQuestion.description}
                      className="input input-bordered input-primary w-full max-w-xs"
                      value={userResponses[currentQuestion.id] || ''}
                      onChange={(e) => handleOpenEndedChange(e.target.value)}
                      required
                    />
                  </div>
                ) : currentQuestion.type === 'multiple-choice' ? (
                  <div className="flex justify-center p-3">
                    <select
                      className="select select-primary w-full max-w-xs"
                      value={userResponses[currentQuestion.id] || ''}
                      onChange={(e) =>
                        setUserResponses({
                          ...userResponses,
                          [currentQuestion.id]: e.target.value
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
              <div className="p-2">
                <button type="submit" className="btn btn-primary">
                  {currentQuestionIndex < questions.length - 1
                    ? 'Next Question'
                    : 'Get Recommendation'}
                </button>
              </div>
              <div className="p-7" />
            </div>
          </form>
        </div>
      </div>
    </DndProvider>
  );
}

export type { UserResponses };
