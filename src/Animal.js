import React, { useState } from "react";
import bird from "./asset/svg/bird.svg";
import cat from "./asset/svg/cat.svg";
import cow from "./asset/svg/cow.svg";
import dog from "./asset/svg/dog.svg";
import gator from "./asset/svg/gator.svg";
import heart from "./asset/svg/heart.svg";
import horse from "./asset/svg/horse.svg";
import "./Animal.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function Animal({ type }) {
  const [clicks, setClicks] = useState(0);

  const handelClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handelClick}>
      <img alt="animal" src={svgMap[type]} className="animal"></img>
      <img
        className="reaction"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      ></img>
    </div>
  );
}

export default Animal;
