import React, { Component } from "react";
import "./Project.css";
import { NonPersonalProject } from "./component/NonPersonalProject";
import { PersonalProject } from "./component/PersonalProject";

export class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="project-list">
          {this.props.isPersonal ? <PersonalProject /> : <NonPersonalProject />}
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
