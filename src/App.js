import "./index.css";
import Promo from "./Promo.js";
import Header from "./Header.js";
import ProductContainer from "./ProductContainer.js";
import Footer from "./Footer.js";
function App() {
  return (
    <div>
      <Promo />
      <Header />
      <h1 className="font-bold text-center text-3xl">Smile :D</h1>
      <div>
        <ProductContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
