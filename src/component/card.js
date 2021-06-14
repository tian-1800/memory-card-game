import React, { useState } from "react";

const Card = (props) => {
    
  const [clicked, setClicked] = useState(props.clicked);
  const handleClick = () => {
    if (clicked) props.clickedAgain(props.src);
    else setClicked(true);
  };

  return (
    <div class="card-frame" onClick={handleClick}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default Card;
