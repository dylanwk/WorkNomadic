import DestinationForm from '@/components/destination-form';
import FormCard from '@/components/ui/form-card';

const Form = () => {
  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full pt-16 pb-14 px-8">
        <h1 className="text-2xl sm:test-3xl font-bold text-center">
          Answer these questions about your dream adventure destination 🌴
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <DestinationForm />
      </div>
    </div>
  );
};

export default Form;
