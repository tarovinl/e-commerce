import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Fragment>
      <Link
        to={`/product/${product.id}`}
<<<<<<< Updated upstream
        className="text-dark no-underline hover:text-gray-500 text-center font-futurabook"
=======
        className="text-dark text-decoration-none"
>>>>>>> Stashed changes
      >
        <div className="bg-white max-w-sm mx-auto p-4">
          <img
            className="w-full h-96 object-cover mb-4"
            src={product.image}
            alt={product.title}
          />
<<<<<<< Updated upstream
          <span className="text-gray-600 text-xs capitalize block my-2">
            {product.category}
          </span>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="font-semibold text-sm mb-0">
              {product.title.slice(0, 30)}...
            </p>
            <h5 className="text-sm mt-2">${product.price}</h5>
          </div>
        </div>
=======
          <Card.Body className="text-center">
            <Card.Title className="fs-6">{product.category}</Card.Title>
            <Card.Text className="text-capitalize text-decoration-none fs-6 fw-bold">
              {product.title.slice(0, 15)} ...
            </Card.Text>
            <h5 className="text-decoration-none">${product.price}</h5>
          </Card.Body>
        </Card>
>>>>>>> Stashed changes
      </Link>
    </Fragment>
  );
}

export default ProductCard;
