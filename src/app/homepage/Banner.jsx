import React from 'react';

const Banner = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex min-h-[350px] items-center justify-between overflow-hidden rounded-xl border border-[#24262c] bg-[#15171c] px-8 py-10">
        {/* banner Content */}
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-bold tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mb-5 text-4xl font-black leading-[0.95] text-white md:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mb-6 max-w-md text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold text-black">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* bannar Image */}
        <div className="hidden md:block">
          <img
            src="assets/banner.png"
            alt="Workout"
            className="w-[320px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
