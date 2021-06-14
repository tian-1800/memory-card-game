import React from "react";

const Card = (props) => {
    
  const handleClick = () => {
      props.handleClick(props.index);
  };

  return (
    <div className="card-frame" onClick={handleClick}>
      <img src={props.src} alt="" />
      <p>{props.index}</p>
    </div>
  );
};

export default Card;
