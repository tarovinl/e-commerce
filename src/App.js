import "./index.css";
import Promo from "./Promo.js";
import Header from "./Header.js";
import ProductContainer from "./ProductContainer.js";
import GuestOrderForm from "./GuestOrderForm.js";
import GuestOrder from "./GuestOrder.js";
import OrderSuccess from "./OrderSuccess.js";
import Footer from "./Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Promo />
        <Header />
        {/*<h1 className="font-bold text-center text-3xl">Smile :D</h1>
      <div>
        <ProductContainer />
  </div>*/}
        <Routes>
          <Route path="/guest-order" element={<GuestOrder/>} />
          <Route path="/order-form" element={<GuestOrderForm />} />
          <Route path = "/order-success" element = {<OrderSuccess/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
