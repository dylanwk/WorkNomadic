// RankingQuestion.tsx

import React, { useState, useEffect } from 'react';

type Question = {
  id: string;
  label: string;
  type: 'open-ended' | 'multiple-choice' | 'ranking'; // Add 'ranking' type
  options?: string[];
};

type UserResponses = Record<string, string | number>;

interface RankingQuestionProps {
  question: Question;
  onRankingSubmit: (ranking: string[]) => void;
}

const RankingQuestion: React.FC<RankingQuestionProps> = ({ question, onRankingSubmit }) => {
  const [rankedItems, setRankedItems] = useState<string[]>([]);
  const [ranking, setRanking] = useState<number>(1); // Initial ranking value

  useEffect(() => {
    setRankedItems([]);
    setRanking(1);
  }, [question.id]);

  const handleClick = (option: string) => {
    // Check if the option is already ranked
    if (!rankedItems.includes(option)) {
      setRankedItems((prevRankedItems) => [...prevRankedItems, option]);
      setRanking((prevRanking) => prevRanking + 1); // Increment the ranking for the next option
    }
  };

  const handleReset = () => {
    setRankedItems([]);
    setRanking(1); // Reset the ranking to 1
  };

  const handleSubmit = () => {
    // You can add additional validation if needed
    onRankingSubmit(rankedItems);
  };

  return (
    <div>
      <p>{question.label}</p>
      <div>
        {question.options?.map((option) => (
          <div key={option}>
            <button
              onClick={() => handleClick(option)}
              style={{ margin: '4px', padding: '8px', border: '1px solid #ccc' }}
            >
              {option}
            </button>
            {rankedItems.includes(option) && (
              <span style={{ marginLeft: '4px', fontWeight: 'bold' }}>{rankedItems.indexOf(option) + 1}</span>
            )}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleReset} style={{ margin: '8px', padding: '8px', border: '1px solid #ccc' }}>
          Reset
        </button>
        <button onClick={handleSubmit} style={{ margin: '8px', padding: '8px', border: '1px solid #ccc' }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RankingQuestion;
