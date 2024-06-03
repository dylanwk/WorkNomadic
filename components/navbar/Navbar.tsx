import React from "react";
import Container from "../Container";
import Image from "next/image";
import UserMenu from "./UserMenu";
import Link from "next/link";
import NavSearch from "../searchbar/NavSearch";

interface NavbarProps {
  search?: boolean;
  landing?: boolean;
  blog?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ search, landing, blog }) => {
  return (
    <div
      className={`bg-transparent w-full z-10 ${search || blog ? "" : "absolute"}`}
    >
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center gap-0">
              <Link href={"/"} className="z-10">
                <Image
                  src={"/images/vagaspace_logo.svg"}
                  height={47}
                  width={47}
                  alt="Logo"
                  className="block"
                  style={{ minWidth: "47px", minHeight: "47px" }}
                />
              </Link>
              {landing && (
                <Link href={"/"} className="hidden sm:block">
                  <Image
                    src={"/images/vagaspace_title_white.png"}
                    height={45}
                    width={200}
                    alt="Vagaspace Title"
                    className="-ml-1"
                  />
                </Link>
              )}
            </div>
            {search && <NavSearch />}
            <UserMenu landing={landing} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
