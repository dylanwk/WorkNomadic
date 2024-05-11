import DestinationForm from '@/components/destination-form';

const Form = () => {
  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full pt-8 pb-6 px-4 sm:px-8">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-10">
          Answer these questions about your dream adventure destination 🌴
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4">
        <DestinationForm />
      </div>
    </div>
  );
};

export default Form;
