import React, { Component } from "react";
import Expense from "./Expense";

class Expenses extends Component {
  render() {
    return this.props.expenses.map((expense, key) => (
      <div key={key}>
        <Expense expense={expense} date={this.props.date} />
      </div>
    ));
  }
}
export default Expenses;
