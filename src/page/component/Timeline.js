import React, { Component } from "react";
import { timelines } from "./../../Info";

export class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <div className="title xlarge-text grey-text">Timeline</div>
        {timelines.map((timeline) => (
          <div>
            <div className="small-text normal-grey-text">{timeline.date}</div>
            {timeline.list.map((text) => (
              <div className="normal-text">{text}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
