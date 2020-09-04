import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Checkout from "./components/checkout/Checkout";
import Header from "./components/main/Header";

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
          <Route path="/login">
            <Header />
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
