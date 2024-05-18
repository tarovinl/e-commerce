import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../features/category/CategorySlice";
import { setSearchQuery } from "../../features/product/ProductSlice";
import { totalCartItem } from "../../features/cart/CartSelector";
import SearchBar from "./SearchBar"; // ayan nasa ibang lugar na ha

const TopNavbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const state = useSelector((state) => state);
  const totalItems = totalCartItem(state);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === "/products") {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);

      dispatch(setSearchQuery(""));
    }
  }, [location, dispatch]);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 drop-shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-900 no-underline"
        >
          <img src="/kopalogo.png" alt="Kopa Logo" className="h-12" />
        </NavLink>
        <div className="md:hidden">
          <button className="focus:outline-none focus:shadow-outline">
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
        {showSearchBar && <SearchBar initialQuery="" />} {/* Use SearchBar */}
        <div className="hidden md:block">
          <div className="space-x-12 flex">
            <NavLink
              to="/products"
              className="text-gray-700 hover:white no-underline font-futurabook "
            >
              <p className="text-lg m-6 group relative w-max">
                <span>Shop</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black group-hover:w-full"></span>
              </p>
            </NavLink>

            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-gray-900 no-underline font-futurabook"
            >
              <p className="text-lg m-6 group relative w-max">
                <span>
                  Cart{" "}
                  {totalItems > 0 && (
                    <span class="inline-block rounded-full bg-custom-black text-white text-xs px-1 py-1">
                      {totalItems}
                    </span>
                  )}
                </span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black group-hover:w-full"></span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
