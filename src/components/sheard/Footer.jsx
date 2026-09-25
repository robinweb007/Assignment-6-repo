import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterPage = () => {
  return (
    <footer className="w-full bg-[#0b0c0e] border-t border-[#202126] py-6 px-4 md:px-12 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-xs">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2">
          <Image
          width={800}
          height={600}
            src="/assets/logo.png"
            alt="FitLog Logo"
            className="w-5 h-5 object-contain"
          />
          <Link
            href="/"
            className="text-white font-extrabold text-sm tracking-wider uppercase"
          >
            FITLOG
          </Link>
        </div>

        {/* Right Side Text */}
        <div className="text-center md:text-right text-gray-400">
          © 2026 FitLog - Workout Library. Train hard, log honest.
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
