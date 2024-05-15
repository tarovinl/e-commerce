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
import { PiMinus, PiPlus } from "react-icons/pi";

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
  const decreaseItemQunaity = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity(item));
  };
  //remove item form cart
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFormCart(item));
  };
  //button styling
  const style = { color: "black", fontSize: "1.5em" };
  //exchange rate
  const exchangeRate = 55;
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${item.id}`).then((res) => {
      setProduct({ ...res.data, quantity: item.quantity });
    });
  }, [item]);
  let content = "";
  if (product) {
    return (content = (
      <Card className="border-0">
        <Card.Body>
          <div className="flex justify-around">
            <div className="flex w-3/4 m-0 justify-between">
              <div className="flex gap-12">
                <div className="flex">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-dark text-decoration-none fs-5"
                  >
                    <img
                      className="w-48 h-64 shadow-md m-2 rounded-md p-0.5"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="grid gap-y-20 ">
                  <div className="flex items-start text-justify font-futura text-xl w-48">
                    {product.title ? product.title.slice(0, 20) : ""}...
                  </div>
                  <div className="flex justify-start h-10">
                    <button
                      className="btn btn-sm font-thin me-3 text-center"
                      onClick={decreaseItemQunaity}
                    >
                      <PiMinus style={style} />
                    </button>
                    <span className="flex text-2xl items-center font-futura">
                      {product.quantity}
                    </span>
                    <button
                      className="btn btn-sm ms-3 text-center"
                      onClick={increaseItemQuantity}
                    >
                      <PiPlus style={style} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid gap-y-20 text-center w-52">
                <span className="flex fs-5 font-futura justify-end gap-x-1">
                  <span>₱ </span>
                  <span>
                    {product.price
                      ? (
                          product.price *
                          product.quantity *
                          exchangeRate
                        ).toFixed(2)
                      : ""}
                  </span>
                </span>
                <div className="flex w-100 text-center font-futura justify-end">
                  <button className="text-xl underline" onClick={removeItem}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    ));
  }
  return { content };
}

export default CartItemCard;
