import React from "react";

const Header = () => {
  return (
    <header className=" ">
      <div className="navbar">
        <div className="navbar-start pl-4 pt-1">
          <a href="/" className="">
            <div className="">
              <img src="/images/icon.png" alt="logo" />
            </div>
          </a>
        </div>
        <div className="navbar-center"></div>

        <div className="navbar-end">
          
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/joinNomadPage">Blog</a>
              </li>
              <li>
                <a className=" font-semibold"  href="/nomadInsights">Nomad Insights</a>
              </li>
              <li>
                <a href="/about">Contact</a>
              </li>
            </ul>
          </div>


          
        </div>
      </div>
    </header>
  );
};

export default Header;
// add padding left and right
