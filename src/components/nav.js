import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Small from "./small";
import Medium from "./medium";
import Large from "./large";

class DropDown extends Component {
  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  };
  render() {
    return (
      <div className="menu">
        <label>Show</label>
        <select onChange={this.onChange}>
          <option value="">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label>enteries</label>
      </div>
      
    );
  }
}

const Menu = withRouter(DropDown);

const Nav = () => {
  return (
    <BrowserRouter>
      <div className="Content">
        <Menu />
        <Route exact path="/" render={() => <Small />} />
        <Route exact path="/medium" render={() => <Medium />} />
        <Route exact path="/large" render={() => <Large />} />
      </div>
    </BrowserRouter>
  );
};

export default Nav;
