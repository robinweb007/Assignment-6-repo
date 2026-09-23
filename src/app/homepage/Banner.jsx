import React from 'react';

const Banner = () => {
  return (
    <section className="mx-auto container mt-8 px-4 md:px-0 ">
      <div className="flex min-h-[380px] flex-col md:flex-row items-center justify-between overflow-hidden rounded-2xl border border-[#202228] bg-[#121318] p-8 md:p-12 gap-8">
        {/* Banner Left Content */}
        <div className="max-w-xl ">
          <p className="mb-4 text-xs font-bold tracking-widest text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.02] tracking-tight text-white">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#b8e600]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Banner Right Image Area */}
        <div className="w-full md:w-auto flex justify-center items-center">
          <div className="flex items-center justify-center rounded-xl p-6 w-full max-w-[360px] md:max-w-none">
            <img
              src="/assets/banner.png"
              alt="Workout Banner"
              className="w-[260px] md:w-[300px] lg:w-[340px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
