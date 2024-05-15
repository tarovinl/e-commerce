import { Carousel, Button } from "react-bootstrap";
import React, { Fragment } from "react";

const HeaderSlider = () => {
  return (
    <Fragment>
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/hm-slider-1.jpg"
            alt="slider haha"
          />
          <Carousel.Caption className="bg-black">
            <h5>Lagyan nyo to ng caption hehehe</h5>
            <p>tapos konting description pa</p>
            <div className="mb-3">
              <Button variant="light">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/hm-slider-2.jpg"
            alt="slider haha"
          />
          <Carousel.Caption className="bg-white">
            <h5>Lagyan nyo to ng caption hehehe</h5>
            <p>tapos konting description pa</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/hm-slider-3.jpg"
            alt="slider haha"
          />
          <Carousel.Caption className="bg-white">
            <h5>Lagyan nyo to ng caption hehehe</h5>
            <p>tapos konting description pa</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default HeaderSlider;
