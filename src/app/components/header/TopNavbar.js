import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../features/category/CategorySlice";
import { setSearchQuery } from "../../features/product/ProductSlice";
import { totalCartItem } from "../../features/cart/CartSelector";
import SearchBar from "./SearchBar";

const TopNavbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-900 no-underline"
        >
          <img src="/kopalogo.png" alt="Kopa Logo" className="h-10" />
        </NavLink>

        {showSearchBar && <SearchBar initialQuery="" />}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="relative focus:outline-none  focus:shadow-outline "
          >
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
        <div className="hidden md:flex items-center  space-x-12">
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
                  location.pathname === "/products"
                    ? "w-full"
                    : "group-hover:w-full"
                }`}
              ></span>
            </p>
          </NavLink>

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
                  location.pathname === "/cart"
                    ? "w-full"
                    : "group-hover:w-full"
                }`}
              ></span>
            </p>
          </NavLink>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <NavLink
            to="/products"
            className="block px-4 py-2 group text-custom-black hover:bg-gray-100 no-underline font-futurabook"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="text-lg  relative mt-2 w-max">
              <span>Shop</span>
              <span
                className={`absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black ${
                  location.pathname === "/products"
                    ? "w-full"
                    : "group-hover:w-full"
                }`}
              ></span>
            </p>
          </NavLink>
          <NavLink
            to="/cart"
            className="block px-4 py-2 group flex  text-custom-black hover:bg-gray-100 no-underline font-futurabook"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="text-lg  relative mt-2 w-max">
              <span>Cart</span>
              <span
                className={`absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black ${
                  location.pathname === "/products"
                    ? "w-full"
                    : "group-hover:w-full"
                }`}
              ></span>
            </p>
            {totalItems > 0 && (
              <span className="ml-2 mt-[13px] mb-[18px] px-1 inline-block rounded-full bg-custom-black text-white text-sm  md:px-1 md:py-1">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
