import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFormCart,
} from "../../features/cart/CartSlice";

function CartItemCard({ item }) {
  //set the product info to state
  const [product, setProduct] = useState({});

  //import redux dispatch
  const dispatch = useDispatch();

  //increase quantity
  const increaseItemQuantity = (e) => {
    e.preventDefault();
    dispatch(increaseQuantity(item));
  };
  //decrease the item quantity
  const decreaseItemQuantity = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity(item));
  };
  //remove item form cart
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFormCart(item));
  };
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${item.id}`).then((res) => {
      setProduct({ ...res.data, quantity: item.quantity });
    });
  }, [item]);
  let content = "";
  if (product) {
    return (content = (
      <div className="flex  font-futurabook ">
        <div className="w-full h-96 flex justify-between pt-4">
          <div className="flex flex-none px-4  h-52 ">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-48 h-48 rounded-lg"
            />
          </div>
          <div className="w-full h-48 flex-col justify-between grid grid-cols-2">
            <div className="flex flex-none">
              <Link
                to={`/product/${product.id}`}
                className="text-dark text-decoration-none fs-5 items-center w-full"
              >
                {product.title ? product.title.slice(0, 170) : ""}
              </Link>
            </div>
            <div className="flex text-right">
              <span className="fs-5 w-full">
                $
                {product.price
                  ? (product.price * product.quantity).toFixed(2)
                  : ""}
              </span>
            </div>

            <div className="d-flex w-full justify-between mb-2">
              <div className="flex-grow">
                <button
                  className="px-2 py-1 mr-2 rounded hover:text-white hover:bg-gray-900 shadow-md transition"
                  onClick={decreaseItemQuantity}
                >
                  <FiMinus />
                </button>
                <span className="text-center w-16 p-1 m-0">
                  {product.quantity}
                </span>
                <button
                  className="px-2 py-1 ml-2 rounded hover:text-white hover:bg-gray-900 shadow-md transition"
                  onClick={increaseItemQuantity}
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            <div className="w-full text-right ">
              <span className="p-1 px-0 rounded-md hover:bg-custom-black hover:text-custom-white transition-colors">
                <Button
                  variant=""
                  onClick={removeItem}
                  className="border-none focus:outline-none "
                >
                  Remove
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return { content };
}

export default CartItemCard;
