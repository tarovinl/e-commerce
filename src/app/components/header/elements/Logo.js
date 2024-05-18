import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="text-xl font-bold text-gray-900 no-underline">
      <img src="/kopalogo.png" alt="Kopa Logo" className="h-10" />
    </NavLink>
  );
}

export default Logo;
