import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Fragment>
      <Link
        to={`/product/${product.id}`}
        className="text-dark no-underline hover:text-gray-500 text-center font-futurabook"
      >
        <div className="bg-white max-w-sm mx-auto p-4 w-full relative">
          <div className="overflow-hidden">
            <img
              className="w-full h-96 object-cover mb-4 transition-transform duration-300 hover:scale-105"
              src={product.image}
              alt={product.title}
            />
          </div>
          <span className="text-gray-600 text-xs capitalize block my-2">
            {product.category}
          </span>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="font-semibold text-sm mb-0">
              {product.title.slice(0, 170)}
            </p>
            <h5 className="text-sm mt-2">${product.price}</h5>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default ProductCard;
