import React, { useState } from "react";
import "./App.css";
import TYPE from "./types";
import { Home } from "./page/Home";
import { Stack } from "./page/Stack";
import { Interest } from "./page/Interest";
import { Career } from "./page/Career";
import { Project } from "./page/Project";
function App() {
  const [address, setAddress] = useState(TYPE.HOME);

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
        <details>
          <summary className="list">
            <div className="large-text" style={{ marginBottom: "5px" }}>
              Who am I
            </div>
          </summary>
          <span onClick={() => setAddress(TYPE.HOME)}>- Who am I</span>
          <span onClick={() => setAddress(TYPE.INTEREST)}>- Interesting</span>
          <span onClick={() => setAddress(TYPE.STACK)}>- Stack</span>
          <span onClick={() => setAddress(TYPE.CAREER)}>- Career</span>
        </details>
        <details>
          <summary className="list">
            <div className="large-text" style={{ marginBottom: "5px" }}>
              Project
            </div>
          </summary>
          <span onClick={() => setAddress(TYPE.COMPANY_PROJECT)}>
            - Company
          </span>
          <span onClick={() => setAddress(TYPE.PERSONAL_PROJECT)}>
            - Personal
          </span>
        </details>
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
