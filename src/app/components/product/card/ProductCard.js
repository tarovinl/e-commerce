import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Fragment>
      <Link
        to={`/product/${product.id}`}
        className="text-dark no-underline  hover:text-gray-500 text-center font-futurabook"
      >
        <div className="bg-white max-w-sm mx-auto p-4 w-full relative group ">
          <div className="relative flex flex-wrap justify-around h-96">
            <img
              className="w-full h-full object-contain mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-70"
              src={product.image}
              alt={product.title}
            />
            {/* Repeat for other products */}
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

          <div className=" absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pt-96">
            <button className="hidden group-hover:block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <button className="hidden group-hover:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default ProductCard;
