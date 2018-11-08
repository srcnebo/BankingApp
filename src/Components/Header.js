import React from "react";

const Header = props => {
  return (
    <header className="active-header">
      <div className="heroSection" />
      <div className="menuBar">
        <ul className="container">
          <li>Home</li>
          <li>Tracking</li>
          <li>Netbank</li>
          <li>Sign in</li>
        </ul>
      </div>
      <div className="titleBar container">
        <h1>Welcome Mr. {props.title}</h1>

        <div className="accBalance">
          <h3>Account Balance:</h3>
          <h3>{props.balance}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

// formatPrice(this.calculateBalance())
