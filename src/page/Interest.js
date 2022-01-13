import React, { useState, useEffect, Component } from "react";
import "./Interest.css";

export class Interest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Interest">
        <div className="Title">
          제 취미는
          <div className="sub-Content">
            Game
            <div>리그 오브 레전드</div>
            <div>메이플 스토리 (유니온 8100 이상, 252 비숍)</div>
            <div>크루세이더 퀘스트</div>
          </div>
          <div className="sub-Content">음악 듣기</div>
          <div className="sub-Content">책 읽기</div>
        </div>
        <div className="Title">
          요즘 가지고 있는 흥미는
          <div className="sub-Content">
            Programming
            <div>- C#, Rust, Golang, Dart</div>
            <div>- DevOps</div>
            <div>- Game Programming</div>
            <div>- 3D</div>
          </div>
          <div className="sub-Content">
            Music
            <div>- Piano</div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
