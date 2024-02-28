'use client';

import QuestionForm from '@/app/components/QuestionForm';

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-50">
      <div className="max-w-screen-md min-h-[100vh] w-full flex flex-col py-10">
        <QuestionForm />
      </div>
    </div>
  );
};

export default Home;
