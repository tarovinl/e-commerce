import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/pages/shop/CategoryProducts";
import Home from "./app/pages/home/Home";
import PageNotFound from "./app/pages/PageNotFound";
import AllProducts from "./app/pages/shop/AllProducts";
import SingleProductDetails from "./app/pages/shop/shopdetails/SingleProductDetails";
import Cart from "./app/pages/Cart";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
