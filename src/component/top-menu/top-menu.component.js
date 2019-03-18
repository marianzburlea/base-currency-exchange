import React from "react";
import { Link } from "@reach/router";

const TopMenu = () => {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/about">About</Link>
      <Link to="/exchange">Exchange Rate</Link>
    </nav>
  );
};

export default TopMenu;
