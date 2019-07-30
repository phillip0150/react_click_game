import React from "react";
import "./style.css";

function Game(props) {
  return (


<div className="card" onClick={()=>{ props.addScore(props.id);}}>
<div className="card-content">
<span>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
        
      </span>

</div>

</div>
  );
}

export default Game;
