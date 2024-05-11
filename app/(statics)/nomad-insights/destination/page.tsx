import { getImage } from '@/app/api/actions/get-image';
import ai from '../../../../lib/ai';
import { DestinationItem, UserResponses } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function Destination({ searchParams }: any) {
  const destination: DestinationItem[] = [];

  // populate form response
  const formResponses: UserResponses = {};

  for (const [key, value] of Object.entries(searchParams)) {
    formResponses[key] = value as string;
  }

  let textPrompt = `You are a travel recommendation engine for digital nomads. Given the user's preferences:\n`;

  for (const key in formResponses) {
    textPrompt += `${key} : ${formResponses[key]}\n`;
  }

  textPrompt +=
    "Please recommend a location that best fits the user's preferences. Enter the location, followed by a comma, then the country, and finally a dash, followed by a detailed description around 60 words explaining why this location is the best fit. Do not provide quotation marks in the description.";

  const response = await ai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'assistant', content: textPrompt }],
    temperature: 1.5,
    max_tokens: 2000
  });

  const entry = response.choices[0]?.message.content
    ?.trim()
    ?.replace(/^"|"$/g, '');

  if (entry) {
    const location = entry.substring(0, entry.indexOf('-')).trim();
    const description = entry.substring(entry.indexOf('-') + 1).trim();
    const imageURL = await getImage(location);

    destination.push({ location, description, imageURL });
  } else {
    console.log('API ERROR');
  }

  //const [location, description] = entry.split(' - ');

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
