import React from "react";
import { formatPrice } from "./Locale";

const Income = props => {
  return (
    <div className="tableBody container">
      <h3>{props.income.description}</h3>
      <p>{formatPrice(props.income.amount)}</p>
      <p>{props.date}</p>
    </div>
  );
};
export default Income;
