"use client";

import { PlanContext } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const {
    todayPlans = [],
    setTodayPlans,
    savedPlans = [],
    setSavedPlans,
  } = useContext(PlanContext);
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  // Current selected tab check
  let currentList = activeTab === "today" ? todayPlans : savedPlans;

  // Sorting logic (Duration, Calories, Rating)
  let sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration || 0) - Number(b.duration || 0);
    }
    if (sortBy === "calories") {
      return Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0);
    }
    if (sortBy === "rating") {
      return Number(b.rating || 0) - Number(a.rating || 0);
    }
    return 0;
  });

  // Calculate total minutes and calories
  let totalMinutes = 0;
  let totalCalories = 0;

  for (let i = 0; i < currentList.length; i++) {
    totalMinutes = totalMinutes + Number(currentList[i].duration || 0);
    totalCalories = totalCalories + Number(currentList[i].caloriesBurned || 0);
  }

  // Item delete function
  const handleDelete = (id) => {
    if (activeTab === "today") {
      const updated = todayPlans.filter((item) => (item.id || item._id) !== id);
      setTodayPlans(updated);
    } else {
      const updated = savedPlans.filter((item) => (item.id || item._id) !== id);
      setSavedPlans(updated);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-white">
            MY PLAN
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Top Summary Box */}
        <div className="grid grid-cols-3 bg-[#14161d] border border-[#202228] rounded-2xl p-6 divide-x divide-[#202228]">
          <div className="flex flex-col gap-1 pl-2 md:pl-4">
            <span className="text-xs font-semibold text-gray-400">
              Exercises
            </span>
            <span className="text-3xl md:text-4xl font-black text-[#C2F800]">
              {currentList.length}
            </span>
          </div>

          <div className="flex flex-col gap-1 pl-6 md:pl-10">
            <span className="text-xs font-semibold text-gray-400">Minutes</span>
            <span className="text-3xl md:text-4xl font-black text-white">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col gap-1 pl-6 md:pl-10">
            <span className="text-xs font-semibold text-gray-400">
              Calories
            </span>
            <span className="text-3xl md:text-4xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Tab Switcher & Sort Option */}
        <div className="flex items-center justify-between">
          <div className="flex bg-[#14161d] p-1 rounded-2xl border border-[#202228]">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase ${
                activeTab === "today"
                  ? "bg-[#202228] text-[#C2F800]"
                  : "text-gray-400"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase ${
                activeTab === "saved"
                  ? "bg-[#202228] text-[#C2F800]"
                  : "text-gray-400"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#14161d] text-white border border-[#202228] rounded-xl px-4 py-2 text-xs outline-none cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* List items Area */}
        <div className="space-y-4">
          {sortedList.length > 0 ? (
            sortedList.map((item) => (
              <div
                key={item.id || item._id}
                className="flex flex-col md:flex-row items-center justify-between bg-[#14161d] border border-[#202228] rounded-2xl p-4 gap-4"
              >
                {/* Left Side: Image & Content */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <Image
                  width={840}
                  height={640}
                    src={item.image || item.img}
                    alt={item.name || item.title}
                    className="w-24 h-20 object-cover rounded-xl bg-[#0b0c0e]"
                  />
                  <div>
                    <h3 className="text-base font-black uppercase text-white">
                      {item.name || item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.equipment || "Bodyweight"}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
                      <span>🕒 {item.duration} min</span>
                      <span>🔥 {item.caloriesBurned} kcal</span>
                      <span>⭐ {item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <Link
                    href={`/fitness/${item.id || item._id}`}
                    className="px-4 py-2.5 rounded-xl border border-[#202228] bg-[#0b0c0e] text-xs font-bold text-white hover:bg-[#1a1c24]"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() =>
                      alert(`Completed ${item.name || item.title}!`)
                    }
                    className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-[#C2F800] text-xs font-black text-black uppercase hover:bg-[#b0e200]"
                  >
                    ✓ Mark as Done
                  </button>

                  <button
                    onClick={() => handleDelete(item.id || item._id)}
                    className="text-gray-500 hover:text-red-500 px-2 py-1 text-base"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-[#14161d]/50 border border-dashed border-[#202228] rounded-3xl p-12 text-center space-y-4">
              <h2 className="text-2xl font-black uppercase text-white">
                NOTHING HERE YET
              </h2>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Browse the library and add a lift to get today moving.
              </p>
              <div>
                <Link
                  href="/fitness"
                  className="inline-block bg-[#C2F800] text-black font-black uppercase text-xs px-6 py-3 rounded-full"
                >
                  Go to workouts
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
