import React, { useState, useEffect, Component } from "react";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-image"></div>
        <div className="Home-description">
          <div>Software Programmer</div>
          <div>
            주도적으로 서비스를 효율적으로 개선하고 개편하고 싶어합니다. 어제 짠
            코드가 효율적으로 만들었는지 확인하고, 팀에 도움이 되는 개발을
            지향합니다.
          </div>
          <div>Contact : </div>
        </div>
      </div>
    );
  }
}
