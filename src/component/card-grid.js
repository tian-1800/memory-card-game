import React, { useState } from "react";
import Card from "./card";

import "../style/card-grid.css";

const CardGrid = (props) => {
  const [isClicked, setIsClicked] = useState([]);
  const handleClick = (index) => {
    if (!isClicked[index]) {
      let tempArr = [...isClicked];
      tempArr[index] = true;
      setIsClicked(tempArr);
      props.userClick(true);
    } else {
      props.userClick(false);
      setIsClicked([]);
    }
  };
  const cardJSXArray = props.data.map((card) => {
    return (
      <Card
        src={card}
        handleClick={handleClick}
        index={props.data.indexOf(card)}
      />
    );
  });
  let rndCardJSXArray = ((array) => {
    let tempArr = [...array];
    for (let i = tempArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    return tempArr;
  })(cardJSXArray);

  return <main id="card-grid">{rndCardJSXArray}</main>;
};

export default CardGrid;
