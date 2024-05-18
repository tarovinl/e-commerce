import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import TopNavbar from "../../components/header/TopNavbar";
import ProductCard from "../../components/product/card/ProductCard";

function AllProducts() {
  const { products, searchQuery, isLoading, error } = useSelector(
    (state) => state.products
  );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fragment>
      <TopNavbar />
      <div className="container mx-auto py-8">
        <h4 className="text-lg mb-4 font-futurabook font-bold">Products</h4>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!isLoading && !error && filteredProducts.length === 0 && (
          <p className="text-custom-black font-futurabook">No results found.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <div className="col-span-1 mb-4" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <div className="my-5"></div>
      <Footer />
    </Fragment>
  );
}

export default AllProducts;
