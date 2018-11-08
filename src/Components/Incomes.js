import React, { Component } from "react";
import Income from "./Income";

class Incomes extends Component {
  render() {
    return this.props.incomes.map((income, key) => (
      <div key={key}>
        <Income income={income} date={this.props.date} />
      </div>
    ));
  }
}

export default Incomes;
