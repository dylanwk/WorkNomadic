import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <div className="text-lg tracking-tight font-bold">vagaspace.</div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"></p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/about"
            >
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/locations"
            >
              {" "}
              Explore{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/contact"
            >
              {" "}
              Contact{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/blog"
            >
              {" "}
              Blog{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className=" text-xs font-extralight tracking-tight justify-right text-left pt-8 p-4">
        © 2024 Vagaspace
      </div>
    </footer>
  );
};

export default Footer;
