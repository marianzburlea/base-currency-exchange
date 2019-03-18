import React from "react";
import TopMenu from "./component/top-menu";
import { Router } from "@reach/router";
import HomePage from "./component/home-page";
import About from "./component/about";
import ExchangeRate from "./component/exchange-rate";

const ExchangeRateApp = () => {
  return (
    <div>
      <h1>Exchange Rate!</h1>
      <TopMenu />
      <Router>
        <HomePage path="/" />
        <About path="/about" />
        <ExchangeRate path="/exchange" />
      </Router>
    </div>
  );
};

export default ExchangeRateApp;