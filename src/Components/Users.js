// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   state = {
//     firstName: "Steven",
//     lastName: "Nebo",
//     incomes: [
//       { amount: 100, description: "App store" },
//       { amount: 3300, description: "Salary" }
//     ],
//     expenses: [
//       { amount: 950, description: "rent" },
//       { amount: 900, description: "car maintenance" },
//       { amount: 550, description: "groceries" }
//     ]
//   };

//   handleAdd = () => {
//     const todos = this.state.todos;
//     todos.push(this.state.text);
//     this.setState({
//       todos: todos
//     });
//   };

//   addIncome = () => {
//     const amount =
//     const description =
//     const newIncome = {};
//     newIncome.amount = parseInt(amount, 10);
//     newIncome.description = description;
//     personAccount.incomes.push(newIncome);
//   };

//   addExpense = () => {
//     const newExpense = {};
//     newExpense.amount = parseInt(amount, 10);
//     newExpense.description = description;
//     personAccount.expenses.push(newExpense);
//   };

//   totalIncomes = () => {
//     let sum = this.incomes.reduce((acc, curVal) => (acc += curVal.amount), 0);
//     return sum;
//   };

//   totalExpenses = () => {
//     let sum = this.expenses.reduce((acc, curVal) => (acc += curVal.amount), 0);
//     return sum;
//   };

//   accountBalance = () => {
//     return this.totalIncomes() - this.totalExpenses();
//   };
// }
