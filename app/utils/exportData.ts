import OpenAI from "openai";
import { DestinationItem } from "../components/types";


type Question = {
    id: string;
    label: string;
    type: "open-ended" | "multiple-choice";
};

type UserResponses = Record<string, string | number>;

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
});

let textPrompt =
    "you are a travel recommendation engine, designed with cutting-edge algorithms and machine learning techniques. Your objective is to analyze a user's preferences and respond with one location that perfectly fits the user's preferences. Explain why, In format Location - Description. Make description around 60 words. The users preferences are: ";

export const exportData = async (questions: Question[], responses: UserResponses) => {
    for (const key in responses) {
        textPrompt += `${key}: ${responses[key]}/n`
    }
    //console.log(textPrompt);
    const response = openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: textPrompt }],
        temperature: 0,
        max_tokens: 2000,
    });

    const destinations: DestinationItem[] = [];

    /* const [, ...entries] = JSON.stringify(
        response.choices[0].message.content
      ).split("\\n\\n"); */
    console.log((await response).choices[0].message.content);
};

/*- 
  openai prompt

  you are a travel recommendation engine, designed with cutting-edge algorithms and machine learning techniques. 
  Your primary objective is to analyze a user's preferences and respond with one location that perfectly fits the user's preferences.
  Respond only with 1 location in location, country format with one paragraph about the location. 
  The users preferences are:    
    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
  -*/
