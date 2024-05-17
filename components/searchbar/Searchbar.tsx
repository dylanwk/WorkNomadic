"use client";

import { BiSearch } from "react-icons/bi";
import useSearchModal from "@/app/hooks/useSearchModal";
import { Input } from "../inputs/Input";
import { FieldValues, useForm } from "react-hook-form";

const Searchbar = () => {
  const searchModal = useSearchModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      location: "",
      date: "",
      guests: "",
    },
  });

  return (
    <div
      onClick={searchModal.onOpen}
      className=" border-[1px] w-full md:w-4/5 py-3.5 rounded-full shadow-sm hover:shadow-md transition cursor-pointer text-white backdrop-filter backdrop-blur-md"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="w-full ml-6 font-semibold text-left">Any Location</div>
        <div className="hidden sm:block text-md font-semibold border-x-[1px] text-center w-full">
          Any Time
        </div>
        <div className="w-full">
          <div className="text-md pl-6 pr-2 flex flex-row items-center justify-end gap-4">
            <div className="hidden sm:block font-semibold text-center pr-2">
              {" "}
              Add Guests
            </div>

            <div className="p-2 bg-rose-500 rounded-full">
              {" "}
              <BiSearch size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
