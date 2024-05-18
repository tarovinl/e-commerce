import React, { Fragment } from "react";
import TopNavbar from "../../components/header/TopNavbar";
import HomepageIntroScene from "./HomepageIntroScene";
import AllCategories from "../../components/categories/AllCategories";
import LatestProducts from "../../components/product/LatestProducts";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <HomepageIntroScene />
      <AllCategories />
      <LatestProducts />
      <Footer />
    </Fragment>
  );
}

export default Home;
