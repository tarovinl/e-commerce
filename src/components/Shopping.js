import React from "react";
import { Outlet, Link } from "react-router-dom";
function Shopping() {
  return (
    <>
      <div>
        Shopping Area
        <div>hehehehe</div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product 1</Link>
        </li>
      </div>
      <Outlet />
    </>
  );
}

export default Shopping;
