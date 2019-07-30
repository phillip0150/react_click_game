import React, { Component } from "react";
import zim from "./friends.json";
import './App.css';
import Game from "./components/Game";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";





class App extends Component{
  
  state = {
    zim: zim.sort(function (a, b) {return Math.random() - 0.5;}),
    score: 0,
    checkZim: []
  };

  addScore = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log("The id: "+id);
    for(var x in this.state.checkZim){
      if(this.state.checkZim[x]===id){
        this.setState({ checkZim:[], score: 0 });
        return;
      }
    }
    this.state.checkZim.push(id);
    console.log(this.state.checkZim);
    // Set this.state.friends equal to the new friends array
    this.setState({ score: this.state.score +1, zim: zim.sort(function (a, b) {return Math.random() - 0.5;})});
    console.log(this.state.score)
  };
  



  render(){
    return (
      <Wrapper>
        <Title>Zim Click Game!</Title>
        <Score>{this.state.score}</Score>
        {this.state.zim.map(zims => (
        <Game
          addScore={this.addScore}
          id={zims.id}
          key={zims.id}
          name={zims.name}
          image={zims.image}
        />
        ))}
        </Wrapper>
        );
      }
    }
    
    export default App;
    