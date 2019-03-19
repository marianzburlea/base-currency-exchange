import React from "react";
import TopMenu from "./component/top-menu";
import { Router } from "@reach/router";
import HomePage from "./component/home-page";
import About from "./component/about";
import ExchangeRate from "./component/exchange-rate";

const ExchangeRateApp = () => {
  return (
    <>
      <TopMenu />
      <Router>
        <HomePage path="/" />
        <About path="/about" />
        <ExchangeRate path="/exchange" />
      </Router>
    </>
  );
};

export default ExchangeRateApp;
