import Link from "next/link";
import React from "react";

type UserResponses = Record<string, string | number>;

interface SuccessPageProps {
  responses: UserResponses;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ responses }) => {
  
  console.log(responses);

  
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
