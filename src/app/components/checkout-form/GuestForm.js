import React, { Fragment } from "react";
import TopNavbar from "../header/TopNavbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GuestForm() {
  return (
    <Fragment>
      <TopNavbar />
      <h3>Continue as guest</h3>
      <p>
        Complete your order without an account. You can save your details on the
        next step to make your future purchases even faster.
      </p>
      <input type="text" placeholder="email" className="border-1" />
      <label>
        <input type="checkbox" />
        My Value
      </label>
      <Link to="/completeform">
        <Button>Continue order</Button>
      </Link>
    </Fragment>
  );
}

export default GuestForm;
