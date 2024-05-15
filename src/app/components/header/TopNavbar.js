import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../../features/category/CategorySlice";

const TopNavbar = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between ">
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-900 no-underline"
        >
          <img src="./kopalogo.png" alt="Kopa Logo" className="h-12" />
        </NavLink>
        <div className="md:hidden">
          <button className="focus:outline-none focus:shadow-outline ">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <div className="space-x-10">
            <NavLink
              to="/products"
              className="text-gray-700 hover:text-gray-900 no-underline font-futurabook"
            >
              Shop
            </NavLink>
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-gray-900 no-underline font-futurabook"
            >
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;