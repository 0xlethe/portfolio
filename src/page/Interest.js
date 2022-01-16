import React, { Component } from "react";
import "./Interest.css";
import { Hobby } from "./component/Hobby";
import { Interest as Interesting } from "./component/Interest";

export class Interest extends Component {
  render() {
    return (
      <div className="Interest">
        <div className="title xlarge-text deep-grey-text">제 취미는</div>
        <Hobby />
        <div className="title xlarge-text deep-grey-text">
          요즘 가지고 있는 흥미는
        </div>
        <Interesting />
        <div className="footer"></div>
      </div>
    );
  }
}
