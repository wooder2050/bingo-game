import React, { Component } from "react";
import "./BingoResult.css";

class BingoResult extends Component {
  render() {
    return (
      <div className="complete-list-wrapper">
        <div className="complete-list-box">
          <div className="complete-header">완성한 빙고</div>
          {this.props.completeBingo1P &&
            this.props.completeBingo1P.map((number, i) => {
              return (
                <div
                  className="complete-list"
                  key={i}
                >{`[${this.props.bingoArray1P[number].toString()}]`}</div>
              );
            })}
        </div>
        <div className="complete-list-box">
          <div className="complete-header">완성한 빙고</div>
          {this.props.completeBingo2P &&
            this.props.completeBingo2P.map((number, i) => {
              return (
                <div
                  className="complete-list"
                  key={i}
                >{`[${this.props.bingoArray2P[number].toString()}]`}</div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default BingoResult;
