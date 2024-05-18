import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import { setSearchQuery } from "../../features/product/ProductSlice";

const SearchBar = ({ initialQuery }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQueryState] = useState(initialQuery);

  const handleSearchChange = (e) => {
    setSearchQueryState(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchQuery(query));
      navigate("/products");
    }, 300),
    [dispatch, navigate]
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchQuery));
    navigate("/products");
  };

  return (
    <form className="flex-1 mx-4" onSubmit={handleSearchSubmit}>
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 2a8 8 0 0 1 8 8c0 1.847-.63 3.553-1.688 4.906l5.346 5.346-1.414 1.414-5.346-5.346A7.938 7.938 0 0 1 10 18a8 8 0 1 1 0-16zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border-b-2 border-gray-300 py-2 pl-12 focus:outline-none focus:border-gray-500"
        />
      </div>
    </form>
  );
};

export default SearchBar;
