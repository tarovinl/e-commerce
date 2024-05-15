import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/pages/shop/CategoryProducts";
import Home from "./app/pages/home/Home";
import PageNotFound from "./app/pages/PageNotFound";
import AllProducts from "./app/pages/shop/AllProducts";
import SingleProductDetails from "./app/pages/shop/shopdetails/SingleProductDetails";
import Cart from "./app/pages/Cart";
import GuestForm from "./app/components/checkout-form/GuestForm";
import CompleteForm from "./app/components/checkout-form/CompleteForm";
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
        <Route path="guestform" element={<GuestForm />} />
        <Route path="completeform" element={<CompleteForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;
