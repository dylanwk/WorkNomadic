import React from "react";
import Container from "../Container";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className=" border-[1px] w-full md:w-4/5 py-4 rounded-full shadow-sm hover:shadow-md transition cursor-pointer text-white backdrop-filter backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between">
        <div className=" text-md font-semibold px-6 text-center">Anywhere</div>
        <div className="hidden sm:block text-md font-semibold px-8 border-x-[1px] text-center">
          Any Week
        </div>
        <div className="text-md pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block font-semibold text-center pr-2">
            {" "}
            Add Guests
          </div>
          <div className="p-2.5 bg-rose-500 rounded-full">
            {" "}
            <BiSearch size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
