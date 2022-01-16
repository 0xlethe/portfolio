import React, { Component } from "react";
import { project } from "./../../Info";

export class PersonalProject extends Component {
  render() {
    return project.personal?.map((content) => (
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
        <div className="print normal large-text">사용 언어 및 프레임워크</div>
        <div className="thin normal-text deep-grey-text">
          {content.language}
        </div>
        <div className="print normal large-text">프로젝트 상세</div>
        {content?.information?.map((information) => (
          <div className="thin small-text deep-grey-text">- {information}</div>
        ))}
        <div className="print normal large-text">역할 및 성과</div>
        {content?.role?.map((role) => (
          <div className="thin small-text deep-grey-text">- {role}</div>
        ))}
      </div>
    ));
  }
}
