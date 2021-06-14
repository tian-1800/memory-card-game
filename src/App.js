import React, { useState } from "react";
import "./App.css";
import Header from "./component/header";
import CardGrid from "./component/card-grid";

import importedImg from "./component/imgData";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  let score = { current: currentScore, high: highScore };
  const handleClick = (user) => {
    if (user) {
      setCurrentScore(currentScore + 1);
    } else {
      if (currentScore>highScore) setHighScore(currentScore);
      setCurrentScore(0);
    }
  };
  return (
    <div className="App">
      <Header score={score} />
      <CardGrid data={importedImg} userClick={handleClick} />
    </div>
  );
}

export default App;
