import React from 'react';


const Navber = () => {
  return (
    <nav className="bg-[#0b0c0e] border-b border-[#202126]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo  site*/}
        <div className="flex items-center gap-2">
          <img src="./assets/logo.png" alt="" />
          <h2 className="text-white font-bold">FITLOG</h2>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="bg-[#1c2a05] text-[#C2F800] px-4 py-2 rounded-full text-xs"
          >
            Workouts
          </a>

          <a href="#" className="text-gray-400 px-4 py-2 text-xs">
            My Plan
          </a>
        </div>

        {/* Right siet*/}
        <div className="flex items-center gap-5 text-xs">
          <button className="text-gray-300">
            Plan
            <span className="ml-2 bg-[#C2F800] text-black rounded-full px-1.5 py-0.5">
              0
            </span>
          </button>

          <button className="text-gray-400">
            Saved
            <span className="ml-2 border border-gray-700 rounded-full px-1.5 py-0.5">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
