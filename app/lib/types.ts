export type DestinationItem = {
  location: string;
  description: string;
  img: string;
};

export type UserResponses = Record<string, string | number>;

export type Question = {
  id: string;
  label: string;
  type: 'multiple-choice' | 'open-ended';
  options?: string[];
  description?: string;
};

export const questions: Question[] = [
  {
    id: 'Wifi Speed preference',
    label: 'What is your Wifi preference?',
    type: 'multiple-choice',
    options: ['No Need for Wifi', 'Moderate (~30mbs)', 'High Speeds (~60mbs)']
  },
  {
    id: 'Region Preference',
    label: 'Which do you perfer? ',
    type: 'multiple-choice',
    options: [
      'Oceania 🏄‍♂️',
      'South America 🌴',
      'Europe 🇪🇺',
      'North America 🌲',
      'Aisa ⛩',
      'Africa 🦒',
      'Middle East 🐪'
    ]
  },
  {
    id: 'Must Have',
    label: 'A must-need for your trip?',
    type: 'open-ended',
    description: 'ex: coffee shops, bars, etc.'
  },
  {
    id: 'Activity Present',
    label: 'What activity do you enjoy?',
    type: 'open-ended',
    description: 'ex: surfing, hiking, nightlife, etc.'
  },
  {
    id: 'Budget per month in dollars',
    label: 'How much are you willing to spend a month',
    type: 'open-ended',
    description: 'ex: $2500, $4000, $6000'
  }
];
