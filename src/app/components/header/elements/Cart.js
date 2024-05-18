import React from "react";
import { NavLink } from "react-router-dom";

export default function Cart({ totalItems, location }) {
  return (
    <NavLink
      to="/cart"
      className={({ isActive }) =>
        `text-gray-700 hover:text-black no-underline font-futurabook ${
          isActive ? "underline" : ""
        }`
      }
    >
      <p className="text-lg mt-4 group relative w-max">
        <span>
          Cart{" "}
          {totalItems > 0 && (
            <span className="inline-block rounded-full bg-custom-black text-white text-xs px-1 py-1">
              {totalItems}
            </span>
          )}
        </span>
        <span
          className={`absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black ${
            location.pathname === "/cart" ? "w-full" : "group-hover:w-full"
          }`}
        ></span>
      </p>
    </NavLink>
  );
}
