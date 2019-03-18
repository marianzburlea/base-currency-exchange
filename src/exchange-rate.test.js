import React from "react";
import ReactDOM from "react-dom";
import ExchangeRate from "./exchange-rate";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExchangeRate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
