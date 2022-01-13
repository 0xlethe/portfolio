import React, { useState, useEffect, Component } from "react";
import "./Stack.css";

export class Stack extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Stack">
        <div className="Stack-Title">
          Front-End Engineering
          <div className="Stack-Content">
            React, TypeScript, JavaScript, HTML/CSS
          </div>
        </div>
        <div className="Stack-Title">
          Back-End Engineering
          <div className="Stack-Content">
            JavaScript, TypeScript, JAVA, Spring, Servlet, Node.js, express.js
          </div>
        </div>
        <div className="Stack-Title">
          Dev-Ops
          <div className="Stack-Content">
            Nginx, AWS (EC2, S3, Lambda, Api GateWay, etc...)
          </div>
        </div>
        <div className="Stack-Title">
          DataBase
          <div className="Stack-Content">MYSQL, MariaDB</div>
        </div>
        <div className="Stack-Title">
          Tool
          <div className="Stack-Content">Git</div>
        </div>
        <div className="Stack-Title">
          Etc
          <div className="Stack-Content">React Native, Python</div>
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}
