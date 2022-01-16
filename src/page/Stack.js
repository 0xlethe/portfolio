import React, { Component } from "react";
import "./Stack.css";
import { Stack as Stacks } from "./component/Stack";

export class Stack extends Component {
  render() {
    return (
      <div className="Stack">
        <Stacks />
        <div className="footer"></div>
      </div>
    );
  }
}
