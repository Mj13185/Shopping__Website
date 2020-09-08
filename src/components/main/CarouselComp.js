import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComp.css";

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/01.jpg")}
          alt="First slide"
        />
        <h2>
          <span className="offer__carouselOne">Has just arrived</span> <br />
          <span className="offer__carouselTwo">Huge Summer Collection</span>
        </h2>
        <br />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/02.jpg")}
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/03.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
