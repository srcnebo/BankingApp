import React, { Component } from "react";
import AddTransactions from "./Components/AddTransactions";
import Incomes from "./Components/Incomes";
import Header from "./Components/Header";
import { formatPrice } from "./Components/Locale";

import "./App.css";
import Expenses from "./Components/Expenses";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    name: "Nebo",
    incomes: [
      {
        id: 1,
        date: Date.now(),
        amount: 30000,
        description: "Freelance"
      }
    ],
    expenses: [
      {
        id: 1,
        date: Date.now(),
        amount: 2000,
        description: "books"
      }
    ]
  };

  handleAdd = (description, amount, type) => {
    amount = parseFloat(amount);
    if (type === "Income") {
      this.setState({
        incomes: [
          ...this.state.incomes,
          { description, amount, date: Date.now() }
        ]
      });
    } else if (type === "Expense") {
      this.setState({
        expenses: [
          ...this.state.expenses,
          { description, amount, date: Date.now() }
        ]
      });
    } else {
      alert("please select a Record type");
    }

    console.log(this.state.expenses);
    console.log(this.state.incomes);
  };
  displayDateTime = () => {
    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();
    var hrs = date.getHours();
    var mins =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return `${day}/${monthIndex}/${year} ${hrs}:${mins}`;
  };

  totalIncomes = () => {
    let sum = this.state.incomes.reduce(
      (acc, curVal) => (acc += curVal.amount),
      0
    );
    return sum;
  };

  totalExpenses = () => {
    let sum = this.state.expenses.reduce(
      (acc, curVal) => (acc += curVal.amount),
      0
    );
    return sum;
  };

  calculateBalance = () => {
    let sum = this.totalIncomes() - this.totalExpenses();
    return sum;
  };

  render() {
    return (
      <>
        <div>
          <Header
            title={this.state.name}
            balance={formatPrice(this.calculateBalance())}
          />
        </div>
        <div>
          <AddTransactions handleAdd={this.handleAdd} />
        </div>
        <div className="displayTransactions container">
          <div className="displayIncomes">
            <h2>Income</h2>
            <div className="tableHeader">
              <h3>Description</h3>
              <h3>Sum</h3>
              <h3>Date</h3>
            </div>
            <Incomes
              incomes={this.state.incomes}
              date={this.displayDateTime()}
            />
            <div className="totalSum">
              <h3>Total Income:</h3>
              <h3>{formatPrice(this.totalIncomes())}</h3>
            </div>
          </div>
          <div className="displayExpenses">
            <h2>Expenses</h2>
            <div className="tableHeader">
              <h3>Description</h3>
              <h3>Sum</h3>
              <h3>Date</h3>
            </div>
            <Expenses
              expenses={this.state.expenses}
              date={this.displayDateTime()}
            />
            <div className="totalSum">
              <h3>Total Expense:</h3>
              <h3>{formatPrice(this.totalExpenses())}</h3>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
