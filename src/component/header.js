import React from "react";

export default function Header(props) {
  const { score } = props;
  const { current, high } = score;

  return (
    <header id="app-header">
      <h2 id="header-title">Memory Game</h2>
      <p>Current score: {current}</p>
      <p>High score: {high}</p>
    </header>
  );
}
