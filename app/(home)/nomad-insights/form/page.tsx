import DestinationForm from '@/app/components/destination-form';

const Form = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-50">
      <div className="max-w-screen-md min-h-[100vh] w-full flex flex-col py-10">
        <DestinationForm />
      </div>
    </div>
  );
};

export default Form;
