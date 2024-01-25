import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import Link from "next/link";
import LoadingPage from "./loading";

type UserResponses = Record<string, string | number>;

interface SuccessPageProps {
  responses: UserResponses;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ responses }) => {
  const [AIresponse, setAIResponse] = useState<any>(null); // AI response state
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const fetchData = async () => {
      const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
      });

      let textPrompt = `you are a travel recommendation engine. Find a destination that fits all of these preferences: \n`;

      for (const key in responses) {
        textPrompt += `${key}: ${responses[key]}\n`;
      }

      textPrompt +=
        "and explain why. In format Location - Description. Make description around 60 words. Do NOT add 'Location: ' to beggining of response";

      try {
        const result = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: textPrompt }],
          temperature: 0,
          max_tokens: 2000,
        });

        setAIResponse(result.choices[0].message.content);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from OpenAI:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [responses]);

  return (
    <section className="bg-gray-50 h-screen">
      <div className="gap-8 items-center justify-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        {loading ? (
          <LoadingPage />
        ) : (
          <>
            <img
              className="w-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
              alt="dashboard image"
            />
            
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                Let's create more tools and ideas that brings us together.
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg ">
                {AIresponse}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Get started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SuccessPage;
