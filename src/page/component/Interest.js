import React, { Component } from "react";
import { interests } from "./../../Info";

export class Interest extends Component {
  render() {
    return (
      <div>
        {interests?.map((interest) => (
          <div>
            <div className="content thin large-text">{interest.title}</div>
            {interest.contents && (
              <div className="thin thin normal-text grey-text">
                {interest.contents.map((content) => (
                  <div>- {content}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
