import React from "react";

const LoadingPage = () => {
  return (
    <div className="justify-center items-center">
      <div className="flex gap-8 justify-center">
        <p className="animate-bounce text-7xl">🏔</p>
        <p className="animate-bounce text-7xl animation-delay-100">🌴</p>
        <p className="animate-bounce text-7xl animation-delay-200">🗽</p>
      </div>
    </div>
  );
};

export default LoadingPage;
