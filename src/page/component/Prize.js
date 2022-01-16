import React, { Component } from "react";
import { prizes } from "./../../Info";

export class Prize extends Component {
  render() {
    return (
      <div className="prize">
        <div className="title xlarge-text grey-text">Prize</div>
        {prizes.map((prize) => (
          <div>
            <div className="content bold large-text">{prize.name}</div>
            <div className="large-text grey-text">{prize.prize}</div>
            <div className="small-text normal-grey-text">{prize.date}</div>
            {prize.github && (
              <div className="github-link normal-text">
                <a href={prize.github}>Github</a>
              </div>
            )}
            <div className="description normal-text">{prize.description}</div>
          </div>
        ))}
      </div>
    );
  }
}
