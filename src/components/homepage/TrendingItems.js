import React from "react";
import "./TrendingItems.css";
import { Card, Button } from "react-bootstrap";
import { ChevronRight, Grade, StarHalf } from "@material-ui/icons";

function TrendingItems() {
  return (
    <div className="treanding__items">
      <div className="heading__trend">
        <p className="title__trend">Treanding products</p>
      </div>
      <div>
        <div className="trend_card_items">
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/Men.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                      fontSize: "8px",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/women.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/kids.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/kids.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="trend_card_items">
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/Men.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/women.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/kids.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>{" "}
                </div>
              </div>
            </Card>
          </div>
          <div className="card__items">
            <Card className="card__img">
              <img
                className="image__cat"
                src={require("../../assets/kids.jpg")}
                alt="catogeryMen "
              />
              <div className="item__details">
                <span className="item__type hide">Item type</span> <br />
                <span className="item__Name hide">Item Name</span> <br />
                <div className="price__">
                  <span className="item__price">$55</span>
                  <span
                    className="item__rating"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#FFD700",
                      
                    }}
                  >
                    <Grade />
                    <Grade />
                    <Grade />
                    <StarHalf style={{ color: "FFD700" }} />
                    <Grade style={{ color: "black" }} />
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="more">
        <Button href="link" className="more__items">
          Shop now
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default TrendingItems;
