'use server';
import { getImage } from '@/app/api/actions/get-image';
import ai from '../../../../lib/ai';
import { DestinationItem, UserResponses } from '@/lib/data';
import Image from 'next/image';

export default async function Destination({ searchParams }: any) {
  const formResponses: UserResponses = {};
  const destination: DestinationItem[] = [];

  // populate form response
  for (const [key, value] of Object.entries(searchParams)) {
    formResponses[key] = value as string;
  }

  let textPrompt = `you are a travel recommendation engine for digital nomads. Find a destination that fits all of these preferences: \n`;

  for (const key in formResponses) {
    textPrompt += `${key} : ${formResponses[key]}\n`;
  }

  textPrompt +=
    "and explain why. In format Location, Country - Description. Make an informative description around 60 words. Do NOT add 'Location: ' to beggining of response";

  const response = await ai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: textPrompt }],
    temperature: 0,
    max_tokens: 2000
  });

  const entry = JSON.stringify(response.choices[0].message.content).replace(
    /^"|"$/g,
    ''
  );

  const [location, description] = entry.split(' - ');
  const imageURL = await getImage(location);

  destination.push({ location, description, imageURL });

  return (
    <>
      {destination.map(({ location, description, imageURL }) => (
        <section className="bg-background min-h-screen" key={location}>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
            <div className="grid gap-8 items-center md:grid-cols-2">
              <img
                className="w-full rounded-lg"
                src={imageURL}
                alt={`Image of ${location}`}
                width={500}
                height={500}
              />
              <div>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
                  {location}
                </h2>
                <p className="mb-6 text-lg font-light text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
