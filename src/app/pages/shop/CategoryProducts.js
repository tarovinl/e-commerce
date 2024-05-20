import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TopNavbar from "../../components/header/TopNavbar";
import ProductCard from "../../components/product/card/ProductCard";
import Sort from "./Sort";

function CategoryProducts() {
  let { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("alphabetical");
  const [searchQuery, setSearchQuery] = useState("");
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    let data = products.filter((p) => p.category === categoryName);
    if (searchQuery) {
      data = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setCategoryProducts(data);
  }, [categoryName, products, searchQuery]);

  useEffect(() => {
    const sorted = [...categoryProducts].sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "priceLowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "priceHighToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setSortedProducts(sorted);
  }, [categoryProducts, sortOption]);

  return (
    <Fragment>
      <TopNavbar setSearchQuery={setSearchQuery} />
      <Container>
        <div className="my-4">
          <h4 className="mb-4">
            Products from -{" "}
            <span className="text-capitalize">{categoryName}</span>
          </h4>
          <Sort
            products={categoryProducts}
            sortOption={sortOption}
            setSortOption={setSortOption}
            setSortedProducts={setSortedProducts}
          />
          <Row>
            {sortedProducts &&
              sortedProducts.map((product) => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={2}
                    lg={2}
                    className="mb-4"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CategoryProducts;
