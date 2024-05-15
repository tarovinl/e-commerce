import React, { useEffect, useState, useCallback } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../features/category/CategorySlice";
import { setSearchQuery } from "../../features/product/ProductSlice";
import { totalCartItem } from "../../features/cart/CartSelector";
import debounce from "lodash.debounce";

const TopNavbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQueryState] = useState("");
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === "/products") {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
      // Clear search query when navigating away from the Shop page
      dispatch(setSearchQuery(""));
    }
  }, [location, dispatch]);

  const handleSearchChange = (e) => {
    setSearchQueryState(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchQuery(query));
      navigate("/products");
    }, 300),
    []
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchQuery));
    navigate("/products");
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
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

        {showSearchBar && (
          <form className="flex-1 mx-4" onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full border-b-2 border-gray-300 py-2 px-4 pl-10 focus:outline-none focus:border-gray-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 0 1 8 8c0 1.847-.63 3.553-1.688 4.906l5.346 5.346-1.414 1.414-5.346-5.346A7.938 7.938 0 0 1 10 18a8 8 0 1 1 0-16zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z" />
              </svg>
            </div>
          </form>
        )}
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
              Cart{" "}
              {totalItems > 0 && (
                <span style={{ color: "red" }}>({totalItems})</span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
