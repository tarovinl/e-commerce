import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
  const totalAmmount = totalPrice(state);

  return (
    <Fragment>
      <TopNavbar />
      <Container className="mt-5">
        <Row>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shoping{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
            carts.map((c) => {
              return (
                <Col sm="12" lg="12" key={c.id}>
                  <CartItemCard item={c} />
                </Col>
              );
            })}
        </Row>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-3/4 mx-auto" />
        {carts.length > 0 && (
          <div className="mb-24">
            <Card className="border-0">
              <Card.Body>
                <div className="flex flex-col justify-content-around font-futura font-thin w-3/4 mx-auto gap-y-0.1">
                  <div className="flex w-100 align-middle justify-between">
                    <h5 className="align-middle d-inline">Subtotal:</h5>
                    <h5> ₱ {subTotal}</h5>
                  </div>
                  <div className="flex w-100 align-middle justify-between">
                    <h5 className="align-middle d-inline">Tax (2%):</h5>
                    <h5> ₱ {tax}</h5>
                  </div>
                  <div className="flex w-100 align-middle justify-between mb-5">
                    <h5 className="align-middle d-inline">Shipping:</h5>
                    <h5> Free</h5>
                  </div>
                  <div className="flex w-100 align-middle justify-between">
                    <h3 className="align-middle d-inline">Total Price:</h3>
                    <h3> ₱ {totalAmmount.toFixed(2)}</h3>
                  </div>
                  <div className="mt-1 w-full text-center bg-black text-white rounded-md h-12 text-2xl content-center">
                    <button className="align-middle d-inline">Checkout</button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Cart;
