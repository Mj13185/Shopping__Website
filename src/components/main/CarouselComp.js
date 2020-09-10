import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { ChevronRight } from "@material-ui/icons";
import "./CarouselComp.css";

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="float-right "
          src={require("../../assets/01.jpg")}
          alt="First slide"
        />
        <div className="carousel__offer">
          <h2>
            <span className="offer__carouselOne">Has just arrived</span> <br />
            <span className="offer__carouselTwo">Huge Summer Collection</span>
            <br />
            <span className="offer__carouselThree">
              Swimwear, Tops, Shorts, Sunglasses & much more...
            </span>
            <br />
            <Button
              href="link"
              className="buttonCarousel text-white"
              style={{ backgroundColor: "#fe3638" }}
            >
              Shop now
              <ChevronRight />
            </Button>
          </h2>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: "rgb(229, 159, 112)" }}>
        <img
          className="float-right"
          src={require("../../assets/03.jpg")}
          alt="second slide"
        />

        <div className="carousel__offer">
          <h2>
            <span className="offer__carouselOne">Complete your new look</span>{" "}
            <br />
            <span className="offer__carouselTwo">New Mens Accesories</span>
            <br />
            <span className="offer__carouselThree">
              Watches, Shirts, Hats & Caps, Sunglasses & much more...
            </span>
            <br />
            <Button
              href="link"
              className="buttonCarousel text-white"
              style={{ backgroundColor: "#fe3638" }}
            >
              Shop now
              <ChevronRight />
            </Button>
          </h2>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: "rgb(235, 176, 176)" }}>
        <img
          className="float-right"
          src={require("../../assets/02.jpg")}
          alt="Third slide"
        />

        <div className="carousel__offer">
          <h2>
            <span className="offer__carouselOne">
              Hurry up linited time offer
            </span>{" "}
            <br />
            <span className="offer__carouselTwo">Women Sportswear Sale</span>
            <br />
            <span className="offer__carouselThree">
              Sneakers, Hoodies, Keds and much more...
            </span>
            <br />
            <Button
              href="link"
              className="buttonCarousel text-white"
              style={{ backgroundColor: "#fe3638" }}
            >
              Shop now
              <ChevronRight />
            </Button>
          </h2>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
