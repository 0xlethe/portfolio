import React, { useState, useEffect, Component } from "react";
import "./Interest.css";

export class Interest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Interest">
        <div className="title xlarge-text deep-grey-text">제 취미는</div>
        <div className="content thin large-text">Game</div>
        <div className="thin thin normal-text grey-text">
          <div>리그 오브 레전드</div>
          <div>메이플 스토리 (유니온 8100 이상, 252 비숍)</div>
          <div>크루세이더 퀘스트</div>
        </div>
        <div className="content thin large-text">음악 듣기</div>
        <div className="content thin large-text">책 읽기</div>
        <div className="title xlarge-text deep-grey-text">
          요즘 가지고 있는 흥미는
        </div>
        <div className="content thin large-text">Programming</div>
        <div className="thin thin normal-text grey-text">
          <div>- C#, Rust, Golang, Dart</div>
          <div>- DevOps</div>
          <div>- Game Programming</div>
          <div>- 3D</div>
        </div>
        <div className="content thin large-text">Music</div>
        <div className="thin thin normal-text grey-text">- Piano</div>
        <div className="footer"></div>
      </div>
    );
  }
}
