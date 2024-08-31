import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import propTypes from "prop-types";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: propTypes.string,
    category: propTypes.string,
    pageSize: propTypes.number,
  };

  render() {
    return (
      <div>
        <Navbar />
        <News key="general" category="general" pageSize={9} country="in" />
      </div>
    );
  }
}
