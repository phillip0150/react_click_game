import React from "react";
import "./style.css";

function Score(props) {
  return <h2 className="title">{props.children}</h2>;
}

export default Score;
