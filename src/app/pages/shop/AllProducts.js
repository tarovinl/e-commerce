import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import TopNavbar from "../../components/header/TopNavbar";
import ProductCard from "../../components/product/card/ProductCard";

function AllProducts() {
  const { products } = useSelector((state) => state.products);

  return (
    <Fragment>
      <TopNavbar />
      <div className="container mx-auto py-8">
        <h4 className="text-lg mb-4">Products</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products &&
            products.map((p) => {
              return (
                <div className="col-span-1 mb-4" key={p.id}>
                  <ProductCard product={p} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="my-5"></div>
      <Footer />
    </Fragment>
  );
}

export default AllProducts;
