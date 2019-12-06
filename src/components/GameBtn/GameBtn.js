import React, { Component } from "react";
import "./GameBtn.css";

class GameBtn extends Component {
  render() {
    return (
      <div className="game-btn-wrapper">
        <div className="game-btn" onClick={e => this.props.onLoad()}>
          <p className="game-btn-text">
            {this.props.gameState ? "게임 재시작" : "게임 시작"}
          </p>
        </div>
      </div>
    );
  }
}
export default GameBtn;
