import React, { Component } from "react";
import "./WarningModal.css";

class WarningModal extends Component {
  render() {
    return (
      <div className="WarningModal">
        <div className="warning-box">
          <div className="warning-box-text">"잘못된 차레입니다."</div>
          <div
            onClick={e => this.props.closeModal()}
            className="warning-btn-wrapper"
          >
            <p className="warning-btn-text">닫기</p>
          </div>
        </div>
      </div>
    );
  }
}
export default WarningModal;
