import React, { Component } from "react";
import { hobbys } from "./../../Info";

export class Hobby extends Component {
  render() {
    return (
      <div>
        {hobbys?.map((interest) => (
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
