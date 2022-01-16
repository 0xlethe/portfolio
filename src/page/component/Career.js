import React, { Component } from "react";
import { careers } from "./../../Info";

export class Career extends Component {
  render() {
    return (
      <div className="career">
        <div className="title xlarge-text grey-text">Career</div>
        {careers.map((career) => (
          <div>
            <div className="bold large-text">{career.company}</div>
            <div className="small-text normal-grey-text">{career.tenure}</div>
            <div className="normal-text">{career.position}</div>
          </div>
        ))}
      </div>
    );
  }
}
