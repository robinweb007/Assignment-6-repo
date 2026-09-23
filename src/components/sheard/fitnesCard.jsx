import Image from 'next/image';
import React from 'react';

const FitnesCard = ({ fitnes }) => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#202228] bg-[#14161d] p-4 transition-all duration-300 hover:border-[#30333d]">
      <div>
        {/* Card Image */}
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-[#1c1e26]">
          <Image
          height={600}
          width={800}
            src={fitnes?.image}
            alt={fitnes?.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Muscle Groups Badges */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {fitnes?.muscleGroups?.map((group, index) => (
            <span
              key={index}
              className="rounded-full bg-[#ccff00] px-2.5 py-0.5 text-[10px] font-black uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-1 text-lg font-black uppercase tracking-tight text-white">
          {fitnes?.name}
        </h3>

        {/* Equipment */}
        <p className="mb-4 text-xs font-medium text-gray-500">
          {fitnes?.equipment}
        </p>
      </div>

      {/* Footer Details: Duration, Calories, Rating */}
      <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
        {/* Duration */}
        <div className="flex items-center gap-1">
          <svg
            className="h-3.5 w-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{fitnes?.duration} min</span>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-1">
          <svg
            className="h-3.5 w-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
          </svg>
          <span>{fitnes?.caloriesBurned} kcal</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <svg
            className="h-3.5 w-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span>{fitnes?.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default FitnesCard;
