import React, { useState } from "react";
import Card from "./card";

const CardGrid = (props) => {
  const [isClicked, setIsClicked] = useState([]);
  const handleClick = (index) => {
    if (!isClicked[index]) {
      let tempArr = [...isClicked];
      tempArr[index] = true;
      setIsClicked(tempArr);
    }
  };
  const cardJSXArray = props.data.map((card) => {
    return (
      <Card src={card} onClick={handleClick} index={cardJSXArray.indexOf(card)} />
    );
  });
  //let rndCardJSXArray =

  return <main id="card-grid">{cardJSXArray}</main>;
};

export default CardGrid;
