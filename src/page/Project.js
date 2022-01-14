import React, { useState, useEffect, Component } from "react";
import "./Project.css";

export class Project extends Component {
  renderTimeline(content) {
    return (
      <div id={content.id} className="ProjectItem">
        <div className="title bold xlarge-text">{content?.name}</div>
        <div className="thin small-text grey-text">{content?.date}</div>
        <div className="thin xsmall-text normal-grey-text">
          {content?.description}
        </div>
        {content?.github && (
          <div className="thin normal-text">
            <a href={content.github}>Github</a>
          </div>
        )}
        {content?.playstore && (
          <div className="thin normal-text">
            <a href={content.playstore}>플레이 스토어</a>
          </div>
        )}
        <div>
          <div className="print normal large-text">사용 언어 및 프레임워크</div>
          <div className="thin normal-text deep-grey-text">
            {content.language}
          </div>
          <div className="print normal large-text">프로젝트 상세</div>
          {content?.information?.map((information) => (
            <div className="thin small-text deep-grey-text">
              - {information}
            </div>
          ))}
        </div>
        <div>
          <div className="print normal large-text">역할 및 성과</div>
          {content?.role?.map((role) => (
            <div className="thin small-text deep-grey-text">- {role}</div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const renderlist = this.props.isPersonal
      ? [
          {
            id: 1,
            name: "VT-livechat",
            date: "2021.12 ~",
            description: "VRChat 서비스 기반 채팅 사이트",
            language: "node.js, typescript, express, socket.io",
            information: [
              "Github를 이용해 협업 및 이슈 관리",
              "Github Action을 이용해, TDD 개발론 적용",
              "yarn berry를 이용해 개발환경 의존성 제거",
            ],
            role: [
              "백엔드 개발 담당",
              "단위 테스트 기능 스터디",
              "supertest를 이용한 테스트 케이스 작성",
            ],
          },
          {
            id: 2,
            name: "Dev-lift(가제)",
            date: "2021.01 ~ (보류중)",
            description:
              "유튜브의 추천 강의를 유저들이 등록해서 보여줄 수 있는 사이트입니다",
            github: "https://github.com/curriculum-of-coding/BackEnd-web",
            language: "node.js, typescript, express, mongoose, docker",
            information: ["Github를 이용해 협업 및 이슈 관리"],
            role: ["백엔드 개발 담당", "기본 템플릿 제작"],
          },
          {
            id: 3,
            name: "VRChat Together",
            date: "2020.06 ~ ",
            description: "VRChat OpenApi 기반 친구관리 앱",
            information: [
              "React Native를 이용한 하이브리드 앱",
              "Github를 이용해 협업 및 이슈 관리",
            ],
            language: "React Native",
            github: "https://github.com/Aboa123/VT-VrchatTogether-",
            playstore: "https://play.google.com/store/apps/details?id=com.vrct",
            role: [
              "Open Api 분석 및 연동 설계",
              "데이터 가공 및 화면 구성",
              "1만 이상 다운로드와. 별점 4점대 유지",
            ],
          },
          {
            id: 4,
            name: "Hermes",
            date: "2018.05 ~ 2018.06",
            description: "교내 자바 프로젝트 제출작 / 택배 보관함",
            language: "C#, PHP, Java",
            information: [
              "C#을 통한 기기 통제 관리 프로그램",
              "아두이노를 이용한 서버, 앱 연동 택배 보관함 제작",
            ],
            github: "https://github.com/0xlethe/project_hermes",
            role: ["아두이노 연동 및 C# 통제 프로그램 설계"],
          },
        ]
      : [
          {
            id: 1,
            name: "이지 롤 플러스",
            date: "2021.09 ~ 2022.02",
            description: "스마트 블라인드",
            language: "Spring boot, node.js, mqtt, ec2, aws lambda, nginx",
            information: [
              "mqtt를 이용한 기기간 통신",
              "nginx를 통한 실시간 배포 구성",
            ],
            role: [
              "비밀번호 찾기 개발",
              "mqtt 라이브러리 마이그레이션",
              "AWS 서버 환경 재구성",
            ],
          },
          {
            id: 2,
            name: "Motilink",
            date: "2020.02 ~ 2022.02",
            description: "멀티 플랫폼 기반 기업용 협업 서비스",
            language: "Java Servlet, AWS EC2, AWS RDS, Nginx, JSP, Angularjs",
            information: [
              "업무 관리, 일정관리 서비스 설계 및 개발",
              "기존 서비스 유지보수 및 리팩토링",
            ],
            role: [
              "프론트, 백엔드 개발",
              "서버 오류 발생률 전년 대비 40% 이상 감소",
              "서버 로깅 시스템 변경으로 오류 분석 최적화 진행",
            ],
          },
        ];
    return (
      <div className="Project">
        <div className="project-list">
          {renderlist.map((element) => {
            return this.renderTimeline(element);
          })}
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
