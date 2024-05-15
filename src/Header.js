import React from "react";

function Header() {
  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour <= 6;

  const backgroundColor = isNightTime ? "bg-black" : "bg-white"; // Adjusted background color
  const textColor = isNightTime ? "text-white" : "text-black"; // Adjusted text color

  return (
    <header>
      <nav>
        <div
          className={
            `${backgroundColor} ${textColor} p-4 flex justify-between items-center relative` // Changed background and text color classes
          }
        >
          <div>
            <span className={`${textColor} text-lg font-bold`}>Logo</span>
          </div>
          <div className="flex items-center justify-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`} // Adjusted text color
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l-2-2m2 2l-2-2m2 2l2-2m-6 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              className={`pl-10 pr-4 py-1 bg-transparent ${textColor} placeholder-${textColor}::placeholder border-b border-${textColor} outline-none focus:ring focus:ring-blue-300`} // Adjusted placeholder and border color classes
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <span className={`${textColor} text-lg`}>Shop</span>
            <span className={`${textColor} text-lg`}>Cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
