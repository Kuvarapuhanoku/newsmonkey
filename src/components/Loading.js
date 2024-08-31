import React, { Component } from "react";
import LoadingImg from "./loading.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={LoadingImg} alt="loading" />
      </div>
    );
  }
}
