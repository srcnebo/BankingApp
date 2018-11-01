import React, { Component } from "react";

export default class Transactions extends Component {
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.handleAdd}>
            <input
              type="number"
              name="amount"
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="description"
              onChange={this.props.handleChange}
            />
            <label>
              Transaction:
              <select
                name="type"
                value={this.props.type}
                onChange={this.props.handleChange}
              >
                <option value="none">Select type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </label>
            <button>Add</button>
          </form>
        </div>
      </div>
    );
  }
}
