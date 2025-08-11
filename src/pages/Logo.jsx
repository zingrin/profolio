import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 cursor-pointer select-none">
      {/* Logo icon */}
      <div className="bg-cyan-600 dark:bg-cyan-400 text-white font-extrabold text-xl w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
        ZL
      </div>

      {/* Logo Text */}
      <div className="text-gray-800 dark:text-gray-100 font-bold text-2xl tracking-wide">
        Loncheu
      </div>
    </Link>
  );
};

export default Logo;
