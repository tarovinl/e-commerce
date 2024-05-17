import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
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
      <div className="d-flex justify-content-between font-futurabook">
        <div className="w-100 flex justify-between ">
          <div className="p-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-3/4 h-full  rounded-lg"
            />
          </div>
          <div className="">
            <div className="flex justify-between ">
              <Link
                to={`/product/${product.id}`}
                className="text-dark text-decoration-none fs-5"
              >
                {product.title ? product.title.slice(0, 170) : ""}
              </Link>

              <div className="w-100 text-center">
                <span className="fs-5">
                  $
                  {product.price
                    ? (product.price * product.quantity).toFixed(2)
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex w-100 h-8 justify-content-center">
            <button
              className=" text-black px-2 py-1 mr-2 "
              onClick={decreaseItemQuantity}
            >
              <FaMinus />
            </button>
            <span className="text-center w-16 p-1 m-0 ">
              {product.quantity}
            </span>
            <button
              className="text-black px-2 py-1 ml-2 rounded "
              onClick={increaseItemQuantity}
            >
              <FaPlus />
            </button>
          </div>

          <div className="w-100 text-center">
            <Button
              variant=""
              onClick={removeItem}
              className="bg-transparent text-black"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    ));
  }
  return { content };
}

export default CartItemCard;
