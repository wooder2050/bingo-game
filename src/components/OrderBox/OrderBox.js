import React, { Component } from "react";
import "./OrderBox.css";

class OrderBox extends Component {
  render() {
    return (
      <div className="order-box">
        <p className="order-text">
          {this.props.gameOrder ? "2P" : "1P"} 차례입니다.
        </p>
      </div>
    );
  }
}
export default OrderBox;
