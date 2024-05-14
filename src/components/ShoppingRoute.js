import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from "./Shopping";
import Product from "./Product";
import shoppingItems from "../FakeData";
export default function ShoppingRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shopping />}>
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingRoute />);
