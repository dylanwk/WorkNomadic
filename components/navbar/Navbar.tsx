import React from "react";
import Container from "../Container";
import Image from "next/image";
import UserMenu from "./UserMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <Image
                src={"/images/vagaspace2.png"}
                height={45}
                width={200}
                alt="logo"
              />
            </Link>
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
