import React, { Component } from "react";
import "./EndingModal.css";

class EndingModal extends Component {
  render() {
    return (
      <>
        <div className="EndingModal">
          <div className="ending-modal-box">
            {this.props.successPlayer &&
            this.props.successPlayer.length === 2 ? (
              <div className="ending-modal-text">무승부입니다.</div>
            ) : (
              <div className="ending-modal-text">
                {this.props.successPlayer[0]}가 빙고를 완성했습니다.
              </div>
            )}
            <div
              onClick={e => this.props.resetGame()}
              className="ending-modal-btn-wrapper"
            >
              확인
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default EndingModal;
