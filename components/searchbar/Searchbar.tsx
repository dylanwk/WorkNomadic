"use client";

import { BiSearch } from "react-icons/bi";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useForm, FieldValues } from "react-hook-form";

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
      className="border-[2px] flex flex-row w-full justify-end md:w-4/5 py-3.5 rounded-full shadow-sm hover:shadow-md transition cursor-pointer text-white backdrop-filter backdrop-blur-md"
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex-1 flex justify-center items-center font-semibold text-left">
          <span className="w-full text-center">Any Location</span>
        </div>
        <div className="hidden sm:flex-1 sm:flex justify-center items-center border-x-[2px] text-center">
          <span className="w-full font-semibold">Any Time</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-semibold text-center">
              Add Guests
            </span>
          </div>
        </div>
      </div>
      <div
        className="p-3 bg-primary rounded-full block mr-2 -ml-6"
        style={{ minWidth: "47px", minHeight: "47px" }}
      >
        <BiSearch size={28} />
      </div>
    </div>
  );
};

export default Searchbar;
