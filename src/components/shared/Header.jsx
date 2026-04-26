"use client";

import { format } from "date-fns";

const Header = () => {
  return (
    <header className="text-center my-8 space-y-3 ">
      {/* Logo / Title */}
      <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
        Global News Times
      </h1>

      {/* Tagline */}
      <p className="text-sm lg:text-base text-gray-500 italic">
        Journalism Without Fear or Favour
      </p>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-black mx-auto rounded-full"></div>

      {/* Date */}
      <p className="text-sm font-medium text-gray-600">
        {format(new Date(), "EEEE, MMM dd, yyyy")}
      </p>
    </header>
  );
};

export default Header;
