import React, { Component } from "react";
import Transactions from "./Components/Transactions";
import "./App.css";

class App extends Component {
  state = {
    name: "Steve",
    incomes: [
      {
        amount: "30",
        description: "Freelance"
      }
    ],
    expenses: [
      {
        amount: "20",
        description: "books"
      }
    ],
    type: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAdd = e => {
    e.preventDefault();

    if (this.state.type === "income") {
      const incomes = [...this.state.incomes];
      incomes.push({
        amount: this.state.amount,
        description: this.state.description
      });
      this.setState({
        incomes
      });
    } else if (this.state.type === "expense") {
      const expenses = [...this.state.expenses];
      expenses.push({
        amount: this.state.amount,
        description: this.state.description
      });
      this.setState({
        expenses
      });
    } else {
      alert("please select a transaction type");
    }

    console.log(this.state.expenses);
    console.log(this.state.incomes);
  };

  // changeSchool = () => {
  //   let school = this.state.school ==='Integrify' ? 'Aalto':'Integrify'
  //   this.setState(previousState => ({
  //     school:school
  //   }));

  // }

  render() {
    return (
      <Transactions
        handleAdd={this.handleAdd}
        type={this.state.type}
        handleChange={this.handleChange}
      />
    );
  }
}

export default App;
