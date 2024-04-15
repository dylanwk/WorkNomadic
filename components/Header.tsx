import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-start">
            <a className="block" href="/">
              <Image
                className=""
                src="/images/vagaspace2.png"
                alt="company logo"
                height={45}
                width={200}
              ></Image>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-primary-900 rounded-2xl transition hover:bg-gray-100 py-2.5 px-3"
                    href="/about"
                  >
                    {" "}
                    What is Vagaspace?{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-primary-900 rounded-2xl transition hover:bg-gray-100 py-2.5 px-3"
                    href="/locations"
                  >
                    {" "}
                    Locations{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-primary-900 rounded-2xl transition hover:bg-gray-100 py-2.5 px-3"
                    href="/contact"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <Link href={"/about"}>
                      <DropdownMenuItem >What is Vagaspace</DropdownMenuItem>
                    </Link>
                    <Link href={"/locations"}>
                      <DropdownMenuItem>Locations</DropdownMenuItem>
                    </Link>
                    <Link href={"/contact"}>
                      <DropdownMenuItem>Contact</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
