import React from "react";
import { formatPrice } from "./Locale";

const Expense = props => {
  return (
    <div className="tableBody container">
      <h3>{props.expense.description}</h3>
      <p>{formatPrice(props.expense.amount)}</p>
      <p>{props.date}</p>
    </div>
  );
};
export default Expense;
