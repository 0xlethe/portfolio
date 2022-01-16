import React, { Component } from "react";
import { stacks } from "./../../Info";

export class Stack extends Component {
  render() {
    return stacks.map((stack) => (
      <div className="title">
        <div className="thin large-text grey-text">{stack.name}</div>
        <div className="thin normal-text normal-grey-text">{stack.list}</div>
      </div>
    ));
  }
}
