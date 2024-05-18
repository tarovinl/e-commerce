import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../features/category/CategorySlice";
import { setSearchQuery } from "../../features/product/ProductSlice";
import { totalCartItem } from "../../features/cart/CartSelector";
import Logo from "./elements/Logo";
import Menu from "./elements/Menu";
import Shop from "./elements/Shop";
import Cart from "./elements/Cart";
import SearchBar from "./elements/SearchBar";

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
        <Logo />
        {showSearchBar && <SearchBar initialQuery="" />}
        <Menu toggleMenu={toggleMenu} />
        <div className="hidden md:flex items-center space-x-12">
          <Shop location={location} />
          <Cart totalItems={totalItems} location={location} />
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
          isMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="bg-white mt-2">
          <NavLink
            to="/products"
            className="block px-4 py-2 group text-custom-black hover:bg-gray-100 no-underline font-futurabook"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="text-lg relative mt-2 w-max">
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
            className="flex px-4 py-2 group text-custom-black hover:bg-gray-100 no-underline font-futurabook"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="text-lg relative mt-2 w-max">
              <span>Cart</span>
              <span
                className={`absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black ${
                  location.pathname === "/cart"
                    ? "w-full"
                    : "group-hover:w-full"
                }`}
              ></span>
            </p>
            {totalItems > 0 && (
              <span className="ml-2 mt-[13px] mb-[18px] px-1 inline-block rounded-full bg-custom-black text-white text-sm md:px-1 md:py-1">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
