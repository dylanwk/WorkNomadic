import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-start">
            <a className="block text-teal-600" href="/">
              <Image
                className=""
                src="/images/vagaspace2.png"
                alt="company logo"
                height={70}
                width={270}
              ></Image>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500"
                    href="/about"
                  >
                    {" "}
                    What is Vagaspace?{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500"
                    href="/locations"
                  >
                    {" "}
                    Locations{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-500"
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
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
