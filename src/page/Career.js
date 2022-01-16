import React, { Component } from "react";
import "./Career.css";
import { Timeline } from "./component/Timeline";
import { Prize } from "./component/Prize";
import { Career as Careers } from "./component/Career";

export class Career extends Component {
  render() {
    return (
      <div className="Career">
        <Timeline />
        <Careers />
        <Prize />
        <div className="footer"></div>
      </div>
    );
  }
}
