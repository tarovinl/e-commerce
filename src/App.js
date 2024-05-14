import "./index.css";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout.js";
import Promo from "./Promo.js";
import Header from "./Header.js";
import ProductContainer from "./ProductContainer.js";
import Footer from "./Footer.js";
import AddToCart from "./components/AddToCart.js";
import Homepage from "./components/Homepage.js";
import Shopping from "./components/Shopping.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="shoplist" element={<Shopping />} />
            <Route path="cartpage" element={<AddToCart />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Promo />
      <Header />
      <h1 className="font-bold text-center text-3xl">Smile :D</h1>
      <div>
        <ProductContainer />
      </div>
      <Footer /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
