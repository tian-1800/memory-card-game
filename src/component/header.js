import React from "react";

export default function Header(props) {
  return (
    <header id="app-header">
      <h2 id="header-title">Memory Game</h2>
      <p>Current score: {props.score.current}</p>
      <p>High score: {props.score.high}</p>
    </header>
  );
}
