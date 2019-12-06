import React, { Component } from "react";
import Cell from "../Cell/Cell";
import "./CellArray.css";

class CellArray extends Component {
  render() {
    return (
      <div className="CellArray">
        {this.props.numberArray &&
          this.props.numberArray.map((number, i) => {
            return (
              <div key={i}>
                {this.props.clickCell ? (
                  <Cell
                    number={number}
                    team={this.props.team}
                    clickCell={this.props.clickCell}
                    clickedNumber={this.props.clickedNumber}
                  />
                ) : (
                  <Cell
                    number={number}
                    team={this.props.team}
                    clickWrongCell={this.props.clickWrongCell}
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
export default CellArray;
