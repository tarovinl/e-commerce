import React from "react";
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div>
        Product
        <h1>PRODUCT 1</h1>
      </div>
      <Outlet />
    </>
  );
}

export default Product;
