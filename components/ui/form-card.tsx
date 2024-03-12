import { Button } from "./button";

const FormCard = () => {
  return (
    <section className="bg-gray-100 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
      <form action="#" className="mx-auto mt-8 max-w-md space-y-4">
        <div className="mx-auto max-w-lg text-center p-4">
          <h1 className="text-4xl font-bold sm:text-4xl">
            What transportation options are you considering for getting to and
            around your destination?
          </h1>
        </div>
        <div>
          {/*<label className="sr-only">Answer</label>

          <div className="relative">
            <input
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Answer"
            />
          </div>
  */}

          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-primary focus:border-primary w-full p-2.5"
          >
            <option value={""} disabled>
              Choose a country
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="flex items-center justify-center py-4">
          <Button size="lg" type="submit">
            Next
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormCard;
