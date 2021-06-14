import React from "react";

import "../style/card.css";

const Card = (props) => {
  const { index, src } = props;

  const handleClick = () => {
    props.handleClick(index);
  };

  return (
    <div className="card-frame" onClick={handleClick} aria-hidden="true">
      <img src={src} alt="" />
    </div>
  );
};

export default Card;
