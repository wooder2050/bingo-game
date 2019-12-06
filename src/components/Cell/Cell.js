import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  render() {
    return (
      <>
        {this.props.clickCell ? (
          <div
            onClick={e =>
              this.props.clickCell(this.props.team, this.props.number)
            }
            className="Cell"
          >
            {this.props.clickedNumber &&
              this.props.clickedNumber.map((number, i) => {
                if (number === this.props.number) {
                  return <div className="clickedCell" key={i}></div>;
                } else {
                  return <div key={i}></div>;
                }
              })}
            {this.props.number}
          </div>
        ) : (
          <div onClick={e => this.props.clickWrongCell()} className="Cell">
            {this.props.clickedNumber &&
              this.props.clickedNumber.map((number, i) => {
                if (number === this.props.number) {
                  return <div className="clickedCell" key={i}></div>;
                } else {
                  return <div key={i}></div>;
                }
              })}
            {this.props.number}
          </div>
        )}
      </>
    );
  }
}
export default Cell;
