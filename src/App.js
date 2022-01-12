import React, { useState, useEffect } from "react";
import "./App.css";
import TYPE from "./types";
import { Home } from "./page/Home";

function App() {
  const [title, setTitle] = useState("home");
  return (
    <div className="App">
      <div className="Left-menu">
        <div className="Button-menu">
          <div className="Button" style={{ backgroundColor: "red" }} />
          <div className="Button" style={{ backgroundColor: "yellow" }} />
          <div className="Button" style={{ backgroundColor: "yellowgreen" }} />
        </div>
        <div className="menu">
          <div className="Menu-Title" onClick={() => setTitle(TYPE.HOME)}>
            HELLO WORLD
          </div>
          <ul className="list">
            Who am I
            <li className="menu-1" onClick={() => setTitle(TYPE.STACK)}>
              Stack
            </li>
            <li className="menu-1">Who am I</li>
            <li className="menu-1">Who am I</li>
          </ul>

          <ul className="list">
            Who am I<li className="menu-1">Stack</li>
            <li className="menu-1">Who am I</li>
            <li className="menu-1">Who am I</li>
          </ul>

          <ul className="list">
            Who am I<li className="menu-1">Stack</li>
            <li className="menu-1">Who am I</li>
            <li className="menu-1">Who am I</li>
          </ul>
        </div>
      </div>
      <div className="Right-menu">
        <div className="Title-menu">{title}</div>
        {title === TYPE.HOME ? (
          <Home className="Content" title={title} />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default App;
