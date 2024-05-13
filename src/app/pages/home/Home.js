import React, { Fragment } from "react";
import TopNavbar from "../../components/header/TopNavbar";
import HeaderSlider from "../../components/slider/HeaderSlider";
import AllCategories from "../../components/categories/AllCategories";
import LatestProducts from "../../components/product/LatestProducts";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <HeaderSlider />
      <AllCategories />
      <LatestProducts />
      <Footer />
    </Fragment>
  );
}

export default Home;
