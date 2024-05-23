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

interface UserMenuInterface {
  landing?: boolean;
}

const UserMenu: React.FC<UserMenuInterface> = ({ landing }) => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={` ${landing ? "text-white font-bold" : "text-black font-semibold"} hidden md:flex text-sm py-3 px-4 hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer flex-row transition`}
            >
              What is Vagaspace
              <div className="pl-1 pt-1">
                <IoIosArrowDown size={16} />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10">
            <div className="z-10 rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="z-10 flex flex-col cursor-pointer">
                <Link href={"/about"}>
                  <MenuItem onClick={() => {}} label="About Us" />
                </Link>
                <Link href={"/blog"}>
                  <MenuItem label="Blog" />
                </Link>
                <Link href={"/contact"}>
                  <MenuItem label="Contact" />
                </Link>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              role="button"
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded="false"
              className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu color={` ${landing ? "white" : "black"}`} />
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
