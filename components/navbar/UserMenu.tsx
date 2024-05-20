"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:flex text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer flex-row">
          What is Vagaspace
          <div className="pl-1 pt-1">
            <IoIosArrowDown size={16} />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              role="button"
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded="false"
              className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu />
              <div className="hidden md:block">
                <Avatar />
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-10">
            <div className="z-10 rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="z-10 flex flex-col cursor-pointer">
                <Link href={"/login"}>
                  <MenuItem onClick={() => {}} label="Login" />
                </Link>
                <Link href={"/register"}>
                  <MenuItem label="Sign Up" />
                </Link>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMenu;
