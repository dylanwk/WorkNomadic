"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRentModal from "@/app/hooks/useRentModel";
import Link from "next/link";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    rentModal.onOpen();
  }, [rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
        >
          Vagaspace your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-nuetral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-0 rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="z-0 flex flex-col cursor-pointer">
            <>
              <Link href={'/login'}>
              <MenuItem onClick={() => {}} label="Login" />
              </Link>
              <Link href={'/register'}>
              <MenuItem label="Sign Up" />
              </Link>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
