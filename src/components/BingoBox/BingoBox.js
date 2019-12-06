import React, { Component } from "react";
import CellArray from "../CellArray/CellArray";
import "./BingoBox.css";

class BingoBox extends Component {
  render() {
    return (
      <div className="bingo-box">
        {this.props.completeBingo &&
          this.props.completeBingo.map((number, i) => {
            return <div className={`complete${number}`} key={i}></div>;
          })}
        {this.props.bingoNumber &&
          this.props.bingoNumber.map((numberArray, i) => {
            return (
              <div key={i}>
                {this.props.gameOrder !== this.props.team ? (
                  <CellArray
                    numberArray={numberArray}
                    team={this.props.team}
                    clickWrongCell={this.props.clickWrongCell}
                    clickedNumber={this.props.clickedNumber}
                  />
                ) : (
                  <CellArray
                    numberArray={numberArray}
                    team={this.props.team}
                    clickCell={this.props.clickCell}
                    clickedNumber={this.props.clickedNumber}
                  />
                )}
              </div>
            );
          })}
      </div>
    );
  }
}
export default BingoBox;
