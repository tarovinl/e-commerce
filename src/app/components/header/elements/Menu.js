import React from "react";

export default function Menu({ toggleMenu }) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="relative focus:outline-none focus:shadow-outline hover:bg-gray-200 p-2 rounded"
      >
        <svg
          className="h-6 w-6 fill-current text-gray-700 hover:text-gray-900 transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
}
