"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";
import Image from "next/image";

const Navbar = () => {
  const { todayPlans, savedPlans } = useContext(PlanContext);

  return (
    <nav className="container mx-auto border-[#202126]">
      <div className="navbar bg-[#121318] border rounded-2xl border-[#202228] px-4 lg:px-8 text-white">
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
                <Link href={"/"} className="hover:text-[#C2F800]">
                  Workouts
                </Link>
              </li>
              <li>
                <Link href={"/myplan"} className="hover:text-[#C2F800]">
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
            width={800}
            height={600}
              src="/assets/logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <Link
              href={"/"}
              className="btn btn-ghost text-xl font-extrabold tracking-wider text-white hover:bg-transparent"
            >
              FITLOG
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-sm font-semibold text-gray-300">
            <li>
              <Link
                href={"/"}
                className="hover:text-[#C2F800] transition-colors"
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href={"/myplan"}
                className="hover:text-[#C2F800] transition-colors"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Dynamic Action Buttons */}
        <div className="navbar-end flex items-center gap-3">
          <Link
            href={"/myplan"}
            className="flex items-center gap-2 bg-[#1d1f27] text-white hover:bg-[#282a36] font-bold text-xs uppercase px-4 py-2.5 rounded-xl border border-[#2e313d] transition-all"
          >
            Plan{" "}
            <span className="text-black bg-[#C2F800] font-black px-2 py-0.5 rounded-full text-[11px]">
              {todayPlans.length}
            </span>
          </Link>

          <Link
            href={"/myplan"}
            className="flex items-center gap-2 bg-[#1d1f27] text-white hover:bg-[#282a36] font-bold text-xs uppercase px-4 py-2.5 rounded-xl border border-[#2e313d] transition-all"
          >
            Saved{" "}
            <span className="text-white bg-[#282a36] font-black px-2 py-0.5 rounded-full text-[11px] border border-[#3a3d4d]">
              {savedPlans.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
