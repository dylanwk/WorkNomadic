import React, { useEffect, useRef, useState } from "react";
import LoadingPage from "./loading";
import { getDestinationImage } from "@/app/components/getImage";
import getAIResult from "@/app/components/getAIResult";

type UserResponses = Record<string, string | number>;

type DestinationItem = {
  location: string;
  description: string;
  imageURL: string;
};

interface SuccessPageProps {
  responses: UserResponses;
}

/**
 * SuccessPage component.
 *
 * Renders the success page with destination information based on user responses.
 *
 * @component
 * @param {SuccessPageProps} props - The component props.
 * @param {Array<Response>} props.responses - The array of responses.
 * @returns {JSX.Element} The rendered SuccessPage component.
 */
const SuccessPage: React.FC<SuccessPageProps> = ({ responses }: SuccessPageProps): JSX.Element => {
  const [destinationArray, setDestinationArray] = useState<DestinationItem[]>([]); // desitination
  const [loading, setLoading] = useState(true); // loading state
  const hasMounted = useRef(false); // Ref to track whether component has mounted

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AIresult = await getAIResult(responses); // Destination Recommender Response
        const [location, description] = AIresult.split(" - "); // Location and Description
        const imageURL = await getDestinationImage(location); // Image Url of Desitination

        setDestinationArray((prevArray) => [
          ...prevArray,
          { location, description, imageURL },
        ]); // desination state update
      } catch (error) {
        console.error(error); // error handling
      } finally {
        setLoading(false); // desination has successfully fetched
      }
    };

    if (!hasMounted.current) {
      fetchData();
      hasMounted.current = true; // Set to true after the initial render
    }
  }, [responses]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          {destinationArray.map(({ location, description, imageURL }) => (
            <section className="bg-yellow-50 min-h-screen" key={location}>
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full rounded-lg" src={imageURL} alt="dashboard image" />
                <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                    {location}
                  </h2>
                  <p className="mb-6 font-light text-gray-600 md:text-lg ">{description}</p>
                </div>
              </div>
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default SuccessPage;
