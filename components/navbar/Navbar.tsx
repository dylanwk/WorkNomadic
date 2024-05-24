import React from "react";
import Container from "../Container";
import Image from "next/image";
import UserMenu from "./UserMenu";
import Link from "next/link";
import { LuPalmtree } from "react-icons/lu";
import NavSearch from "../searchbar/NavSearch";

interface NavbarProps {
  search?: boolean;
  landing?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ search, landing }) => {
  return (
    <div className={`bg-transparent w-full z-10 ${search ? "" : "absolute"}`}>
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row gap-0">
              <Link href={"/"} className="z-10">
                <Image
                  src={"/images/vagaspace_logo.png"}
                  height={47}
                  width={47}
                  alt="Logo"
                />
              </Link>
              <Link href={"/"} className="hidden sm:block">
                <Image
                  src={"/images/vagaspace_title_white.png"}
                  height={45}
                  width={200}
                  alt="Vagaspace Title"
                  className="-ml-2"
                />
              </Link>
            </div>
            {search && <NavSearch />}
            {landing ? <UserMenu landing /> : <UserMenu />}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
