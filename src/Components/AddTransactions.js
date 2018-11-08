import React, { Component } from "react";
import "./AddTransactions.css";

export default class AddTransactions extends Component {
  state = {
    description: "",
    amount: Number,
    type: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let { description, amount, type } = this.state;
    this.props.handleAdd(description, amount, type);
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <form onSubmit={this.handleSubmit} className="main-form">
            <label htmlFor="description" />
            <input
              className="formInput"
              id="description"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description"
            />
            <label htmlFor="amount" />
            <input
              className="formInput"
              id="amount"
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              placeholder="Amount"
            />
            <label htmlFor="typeSelect" />
            <select
              id="typeSelect"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <option value="none">Record type ⇅</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <button className="button">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
