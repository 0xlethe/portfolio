import React, { useState, useEffect, Component } from "react";
import "./Stack.css";

export class Stack extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Stack">
        <div className="title thin large-text grey-text">
          Front-End Engineering
        </div>
        <div className="thin normal-text normal-grey-text">
          React, TypeScript, JavaScript, HTML/CSS
        </div>
        <div className="title thin large-text grey-text">
          Back-End Engineering
        </div>
        <div className="thin normal-text normal-grey-text">
          JavaScript, TypeScript, JAVA, Spring, Servlet, Node.js, express.js
        </div>
        <div className="title thin large-text grey-text">Dev-Ops</div>
        <div className="thin normal-text normal-grey-text">
          Nginx, AWS (EC2, S3, Lambda, Api GateWay, etc...)
        </div>
        <div className="title thin large-text grey-text">DataBase</div>
        <div className="thin normal-text normal-grey-text">MYSQL, MariaDB</div>
        <div className="title thin large-text grey-text">Tool</div>
        <div className="thin normal-text normal-grey-text">Git</div>
        <div className="title thin large-text grey-text">Etc</div>
        <div className="thin normal-text normal-grey-text">
          React Native, Python
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}
