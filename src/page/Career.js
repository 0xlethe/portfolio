import React, { useState, useEffect, Component } from "react";
import "./Career.css";

export class Career extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Career">
        <div className="timeline">
          <div className="title xlarge-text grey-text">Timeline</div>
          <div className="small-text normal-grey-text">2017</div>
          <div className="normal-text">수원대학교 정보보호학과 입학</div>
          <div className="normal-text">교내 소프트웨어 개발대회 은상</div>
          <div className="small-text normal-grey-text">2018</div>
          <div className="normal-text">
            서울시 공공데이터 공모전 참가상 수상
          </div>
          <div className="small-text normal-grey-text">2020 ~ 2022</div>
          <div className="normal-text">산업기능요원 복무</div>
        </div>

        <div className="career">
          <div className="title xlarge-text grey-text">Career</div>
          <div className="bold large-text">(주)포커스원</div>
          <div className="small-text normal-grey-text">2020.02 ~ 2022.02</div>
          <div className="normal-text">산업기능요원 / 백엔드 개발자</div>
        </div>

        <div className="Prize">
          <div className="title xlarge-text grey-text">Prize</div>
          <div className="large-text">교내 소프트웨어 개발대회 은상</div>
          <div className="small-text normal-grey-text">2017</div>
          <div className="github-link normal-text">
            <a href="https://github.com/0xlethe/The_ruin">Github Link</a>
          </div>
          <div className="description normal-text">
            C언어만 이용하라는 조건이 있어, 여러가지 미니게임을 혼합한
            콘솔게임을 만들었습니다.
          </div>
          <div className="content large-text">
            서울시 공공데이터 공모전 참가상 수상
          </div>
          <div className="small-text normal-grey-text">2018.09</div>
          <div className="github-link normal-text">
            <a href="https://github.com/0xlethe/SEOUL-2018-Help_ping">
              Github Link
            </a>
          </div>
          <div className="description normal-text">
            서울시에서 급한 일이 생길 때 공공화장실을 찾기 힘들어, 사용자에게
            공공화장실과, 내부 시설, 장애인 화장실 여부를 알려주는 어플리케이션
            입니다.
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
