import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Checkout from "./components/checkout/Checkout";
import Header from "./components/main/Header";
import HomePage from "./components/homepage/HomePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/shop">
            <Header />
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
