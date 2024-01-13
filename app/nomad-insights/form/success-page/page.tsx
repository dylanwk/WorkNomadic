import Link from "next/link";
import React from "react";
//import { UserResponses } from "@/app/components/Question";

type UserResponses = Record<string, string | number>;

interface SuccessPageProps {
  userResponses: UserResponses
}

const SuccessPage: React.FC<SuccessPageProps> = ({ userResponses }) => {
  //const response01 = userResponses.response1;

  //console.log(textPrompt);
  return (
    <div className="card w-fill bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Thank You!</h2>
        <p></p>
        <div className="card-actions justify-end">
          <Link href="/">
            <button className="btn btn-primary">Return to Home</button>
          </Link>
        </div>
      </div>  
    </div>
  );
};

export default SuccessPage;
