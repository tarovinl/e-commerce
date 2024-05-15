import React, { Fragment } from "react";
import RightCartIcon from "../cart/RightCartIcon";

function Footer() {
  return (
    <Fragment>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>Copyright & Developed by KarlyCakes</span>
      </div>
    </Fragment>
  );
}

export default Footer;
