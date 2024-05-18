import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "./card/CategoryCard";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <div className="container mx-auto my-3 py-3 px-4 font-futurabook">
      <h3 className="text-center text-xl mb-4 font-bold">Browse Categories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories &&
          categories.map((c, index) => {
            return (
              <div className="p-2 bg-white" key={index}>
                <CategoryCard category={c} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllCategories;
