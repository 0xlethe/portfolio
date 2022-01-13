import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "./App.css";
import TYPE from "./types";
import { Home } from "./page/Home";
import { Stack } from "./page/Stack";
import { Interest } from "./page/Interest";
import { Career } from "./page/Career";
import { Project } from "./page/Project";
function App() {
  const [title, setTitle] = useState(TYPE.HOME);
  const [selector, setSelector] = useState("0");

  const renderContent = () => {
    switch (title) {
      case TYPE.HOME:
        return <Home className="Content" title={title} />;
      case TYPE.STACK:
        return <Stack className="Content" title={title} />;
      case TYPE.INTEREST:
        return <Interest className="Content" title={title} />;
      case TYPE.CAREER:
        return <Career className="Content" title={title} />;
      case TYPE.COMPANY_PROJECT:
        return <Project className="Content" title={title} />;
      case TYPE.PERSONAL_PROJECT:
        return <Project className="Content" title={title} isPersonal={true} />;
      default:
        return <div />;
    }
  };

  const dropdownStype = {
    display: "flex",
    fontWeight: "normal",
    position: "relative",
    marginTop: "2px",
  };
  return (
    <div className="App">
      <div className="Left-menu">
        <div className="Button-menu">
          <div
            className="Button"
            style={{ backgroundColor: "rgb(240,91,91)" }}
          />
          <div
            className="Button"
            style={{ backgroundColor: "rgb(244,183,51)" }}
          />
          <div
            className="Button"
            style={{ backgroundColor: "rgb(76,207,61)" }}
          />
        </div>
        <div className="menu">
          <div className="Menu-Title" onClick={() => setTitle(TYPE.HOME)}>
            Lethe
          </div>
          <Dropdown>
            <Dropdown.Menu
              show
              className="list"
              style={{ width: "calc(98% - 20px)" }}
              onChange={(e) => setSelector(e.eventKey)}
            >
              <Dropdown.Header
                style={{ marginBottom: "5px", fontWeight: "bolder" }}
              >
                Who am I
              </Dropdown.Header>

              <Dropdown.Item
                eventKey="2"
                className="menu-1"
                style={dropdownStype}
                onClick={() => setTitle(TYPE.HOME)}
              >
                - Who am I
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="3"
                style={dropdownStype}
                onClick={() => setTitle(TYPE.INTEREST)}
              >
                - Interesting
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="4"
                onClick={() => setTitle(TYPE.STACK)}
                style={dropdownStype}
                active={"2" === selector}
              >
                - Stack
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="3"
                style={dropdownStype}
                onClick={() => setTitle(TYPE.CAREER)}
              >
                - Career
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Menu
              show
              className="list"
              style={{ width: "calc(98% - 20px)", marginTop: "20px" }}
              onChange={(e) => setSelector(e.eventKey)}
            >
              <Dropdown.Header
                style={{ marginBottom: "5px", fontWeight: "bolder" }}
              >
                Project
              </Dropdown.Header>

              <Dropdown.Item
                eventKey="2"
                className="menu-1"
                style={dropdownStype}
                onClick={() => setTitle(TYPE.COMPANY_PROJECT)}
              >
                - Company
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="4"
                onClick={() => setTitle(TYPE.PERSONAL_PROJECT)}
                style={dropdownStype}
                active={"2" === selector}
              >
                - Personal
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="Information-Portfolio">
          Create by React, Made by 0xlethe
        </div>
      </div>
      <div className="Right-menu">
        <div className="Title-menu">{title}</div>
        <div className="Content">{renderContent()}</div>
        <div className="Copyright-font">
          해당 웹페이지는 NEXON의 '넥슨 Lv.1 고딕'을 사용하였습니다
        </div>
      </div>
    </div>
  );
}

export default App;
