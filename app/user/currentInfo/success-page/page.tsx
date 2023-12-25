import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="card w-fill bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Thank You!</h2>
        <p>You will recieve your desination page in your inbox.</p>
        <div className="card-actions justify-end">
          <Link href="/">
            <button className="btn btn-primary">Return to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
