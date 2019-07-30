import React from "react";
import "./style.css";

function Score(props) {
  return <h2 className="score">Your Score: {props.score} | Your High Score: {props.highScore}</h2>;
}

export default Score;
