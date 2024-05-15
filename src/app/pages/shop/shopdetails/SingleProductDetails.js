import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../components/header/TopNavbar";
import Footer from "../../../components/footer/Footer";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts } from "../../../features/cart/CartSlice";

function SingleProductDetails() {
  let { productId } = useParams();
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // Increase item quantity
  const increaseQuantity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };

  // Decrease item quantity
  const decreaseQuantity = (e) => {
    e.preventDefault();
    quantity > 1
      ? setQuantity((prevQuantity) => prevQuantity - 1)
      : setQuantity(quantity);
  };

  // Add the item to the cart
  const addToCart = (e) => {
    e.preventDefault();
    let item = {
      id: parseInt(productId),
      quantity: quantity,
      price: product.price,
    };
    dispatch(addToCarts(item));
  };

  // Use effect function to find the product from all products
  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(productId));
    setProduct(result);
  }, [productId, products]);

  return (
    <Fragment>
      <TopNavbar />
      <div className="font-futurabook container mx-auto px-4 py-8">
        {product && (
          <div className=" flex flex-wrap my-5">
            <div className="w-full md:w-1/2">
              <div className="p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-3/4 h-full  rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h4 className=" ">
                <Link
                  to={`/category/${product.category}`}
                  className="text-black text-sm no-underline capitalize"
                >
                  {product.category}
                </Link>
              </h4>
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>

              <h4 className="text-black text-xl py-2">${product.price}</h4>
              <p className="text-gray-600 text-base">{product.description}</p>
              <div className="flex items-center mb-3">
                <button
                  className=" text-black px-2 py-1 mr-2 "
                  onClick={decreaseQuantity}
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  className="border border-gray-300 text-center w-16 p-1 m-0"
                  value={quantity}
                  readOnly
                  required
                />
                <button
                  className="text-black px-2 py-1 ml-2 rounded"
                  onClick={increaseQuantity}
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex">
                <button
                  className="text-xl bg-custom-black text-white px-4 py-2 flex items-center justify-between"
                  onClick={addToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  Add to Basket
                  <h4 className="text-white text-xl ml-28 mt-2">
                    ${product.price}
                  </h4>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

export default SingleProductDetails;
