import Link from 'next/link';
import React from 'react';


const Navber = () => {
  return (
    <nav className=" container mx-auto  border-[#202126]">
      <div className="navbar bg-[#121318] border rounded-2xl border-[#202228] px-4 lg:px-8 text-white ">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white hover:bg-[#1f2128]"
            >
              <svg
                aria-label="Menu"
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#15171c] border border-[#24262c] text-gray-300 rounded-box z-50 mt-3 w-52 p-2 shadow-xl"
            >
              <li>
                <a className="hover:text-[#C2F800]">Workouts</a>
              </li>
              <li>
                <a className="hover:text-[#C2F800]">My Plan</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="assets/logo.png" alt="" />
            <a className="btn btn-ghost text-xl font-extrabold tracking-wider text-white hover:bg-transparent">
              FITLOG
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-sm font-semibold text-gray-300">
            <li>
              <a className="hover:text-[#C2F800] transition-colors">Workouts</a>
            </li>
            <li>
              <a className="hover:text-[#C2F800] transition-colors">My Plan</a>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="navbar-end">
          <button className=" text-white text-black hover:bg-[#b0e200] border-none font-bold text-xs uppercase px-5 rounded-lg">
            Plan{" "}
            <span className="border rounded-full text-black bg-[#C2F800] px-2">
              0
            </span>
          </button>
          <button className=" text-white hover:bg-[#b0e200] border-none font-bold text-xs uppercase px-5 rounded-lg">
            Saved
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
