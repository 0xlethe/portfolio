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
  const [address, setAddress] = useState(TYPE.HOME);
  const [selector, setSelector] = useState("0");

  const renderContent = () => {
    switch (address) {
      case TYPE.HOME:
        return <Home className="Content" address={address} />;
      case TYPE.STACK:
        return <Stack className="Content" address={address} />;
      case TYPE.INTEREST:
        return <Interest className="Content" address={address} />;
      case TYPE.CAREER:
        return <Career className="Content" address={address} />;
      case TYPE.COMPANY_PROJECT:
        return <Project className="Content" address={address} />;
      case TYPE.PERSONAL_PROJECT:
        return (
          <Project className="Content" address={address} isPersonal={true} />
        );
      default:
        return <div />;
    }
  };

  const renderProtfolioList = () => {
    return (
      <div className="thin normal-text normal-grey-text">
        <Dropdown>
          <Dropdown.Menu
            show
            className="list"
            style={{ width: "calc(98% - 20px)" }}
            onChange={(e) => setSelector(e.eventKey)}
          >
            <Dropdown.Header
              className="large-text"
              style={{ marginBottom: "5px" }}
            >
              Who am I
            </Dropdown.Header>

            <Dropdown.Item eventKey="2" onClick={() => setAddress(TYPE.HOME)}>
              - Who am I
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => setAddress(TYPE.INTEREST)}
            >
              - Interesting
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              onClick={() => setAddress(TYPE.STACK)}
              active={"2" === selector}
            >
              - Stack
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => setAddress(TYPE.CAREER)}>
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
              className="large-text"
              style={{ marginBottom: "5px" }}
            >
              Project
            </Dropdown.Header>
            <Dropdown.Item
              eventKey="2"
              onClick={() => setAddress(TYPE.COMPANY_PROJECT)}
            >
              - Company
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              onClick={() => setAddress(TYPE.PERSONAL_PROJECT)}
              active={"2" === selector}
            >
              - Personal
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="left-menu do-not-copy">
        <div className="button-menu">
          <div className="button red" />
          <div className="button yellow" />
          <div className="button green" />
        </div>
        <div
          className="portfolio-title thin xxlarge-text deep-grey-text"
          onClick={() => setAddress(TYPE.HOME)}
        >
          Lethe
        </div>
        <div className="portfolio-list">{renderProtfolioList()}</div>
        <div className="information-portfolio thin xxsmall-text grey-text">
          Create by React, Made by 0xlethe
        </div>
      </div>
      <div className="right-menu">
        <div className="address-bar xlarge-text grey-text do-not-copy">
          {address}
        </div>
        <div className="content">{renderContent()}</div>
        <div className="copyright thin xxsmall-text grey-text do-not-copy">
          해당 웹페이지는 NEXON의 '넥슨 Lv.1 고딕'을 사용하였습니다
        </div>
      </div>
    </div>
  );
}

export default App;
