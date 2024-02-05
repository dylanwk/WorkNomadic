import OpenAI from "openai";
import { UserResponses } from "./Question";


const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

const getAIResult = async (responses: UserResponses) => {


  let textPrompt = `you are a travel recommendation engine for digital nomads. Find a destination that fits all of these preferences: \n`;

  for (const key in responses) {
    textPrompt += `${key}: ${responses[key]}\n`;
  }

  textPrompt +=
    "and explain why. In format Location, Country - Description. Make an informative description around 60 words. Do NOT add 'Location: ' to beggining of response";

  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: textPrompt }],
    temperature: 0,
    max_tokens: 2000,
  });

  const entry = JSON.stringify(result.choices[0].message.content).replace(/^"|"$/g, '');

  return(entry);


}
export default getAIResult;


