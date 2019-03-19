import React from "react";
import { RateStyledList } from "./exchange-rator-list.style";

const ExchangeRatorList = ({ rateList }) => {
  const getNiceNumber = (n, decimal, rateKey) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: rateKey
    }).format(~~(n * Math.pow(10, decimal)) / Math.pow(10, decimal));
  return (
    <RateStyledList>
      {Object.keys(rateList).map(rateKey => (
        <div className="rate-list-item" data-key={rateKey}>
          {getNiceNumber(rateList[rateKey], 3, rateKey)}
        </div>
      ))}
    </RateStyledList>
  );
};

export default ExchangeRatorList;
