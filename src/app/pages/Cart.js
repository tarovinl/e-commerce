import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart/CartItemCard";
import Footer from "../components/footer/Footer";
import TopNavbar from "../components/header/TopNavbar";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../features/cart/CartSelector";
import { cartState } from "../features/cart/CartSlice";

function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmount = totalPrice(state);

  return (
    <Fragment>
      <TopNavbar />
      <div className="container ">
        <Row>
          {!carts.length && (
            <div className="w-100 py-48 text-center font-futurabook ">
              <h3>
                Your cart is lonely. Go for{" "}
                <Link
                  to="/products"
                  className="font-bold text-black text-decoration-none"
                >
                  shopping!{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
            carts.map((c) => {
              return (
                <div className="h-52 w-full">
                  <Col sm="12" lg="12" key={c.id}>
                    <CartItemCard item={c} />
                  </Col>
                </div>
              );
            })}
        </Row>

        {carts.length > 0 && (
          <div className="my-6 border-t-2 border-[#a6a6a6]">
            <div className="flex flex-col font-futurabook mt-2 space-y-0 ">
              <div className="flex justify-between ">
                <h5 className="text-lg">Subtotal</h5>
                <h5 className="text-lg">${subTotal}</h5>
              </div>
              <div className="flex justify-between ">
                <h5 className="text-lg">Tax (2%)</h5>
                <h5 className="text-lg">${tax}</h5>
              </div>
              <div className="flex justify-between ">
                <h5 className="text-lg">Shipping</h5>
                <h5 className="text-lg">Free</h5>
              </div>
              <div className="flex  justify-between  mt-2 mb-4 ">
                <h5 className="text-2xl font-bold">Total:</h5>
                <h5 className="text-2xl font-bold">
                  ${totalAmount.toFixed(2)}
                </h5>
              </div>
            </div>
            <div className="text-center text-2xl font-futurabook">
              <Link to="/guestform" className="text-decoration-none">
                <button
                  className="inline-block w-full h-16 text-center text-2xl 
                hover:text-custom-black 
                hover:bg-custom-white 
                bg-custom-black 
                text-custom-white 
                transition drop-shadow-md"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

export default Cart;
