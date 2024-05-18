import React from "react";
import { NavLink } from "react-router-dom";

export default function Shop({ location }) {
  return (
    <NavLink
      to="/products"
      className={({ isActive }) =>
        `text-gray-700 hover:text-black no-underline font-futurabook ${
          isActive ? "underline" : ""
        }`
      }
    >
      <p className="text-lg group relative mt-4 w-max">
        <span>Shop</span>
        <span
          className={`absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black ${
            location.pathname === "/products" ? "w-full" : "group-hover:w-full"
          }`}
        ></span>
      </p>
    </NavLink>
  );
}
