import React, { useEffect } from "react";

const Sort = ({ products, sortOption, setSortOption, setSortedProducts }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "priceLowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "priceHighToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setSortedProducts(sortedProducts);
  }, [products, sortOption, setSortedProducts]);

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2 font-futurabook">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
