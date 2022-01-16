import React, { Component } from "react";
import "./Home.css";
import { introduction } from "./../Info";

export class Home extends Component {
  render() {
    const { email, profileImage, phone, github, whoami, profile } =
      introduction;
    return (
      <div className="Home">
        <div
          className="image"
          style={{
            backgroundImage: `url("${profileImage}")`,
          }}
        ></div>
        <div className="description">
          <div className="blod xxlarge-text grey-text">{whoami}</div>
          <div className="thin normal-text normal-grey-text">
            {[...profile].map((content) => (
              <div>{content}</div>
            ))}
          </div>
        </div>
        <div className="contact normal-text grey-text">
          <div>📞 contact : {phone}</div>
          <div>📧 email : {email}</div>
          <div>
            🔗 github : <a href={github}>{github}</a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
