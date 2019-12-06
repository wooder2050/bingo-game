import React, { Component } from "react";
import WarningModal from "../WarningModal/WarningModal";
import EndingModal from "../EndingModal/EndingModal";
import OrderBox from "../OrderBox/OrderBox";
import BingoBox from "../BingoBox/BingoBox";
import BingoResult from "../BingoResult/BingoResult";
import GameBtn from "../GameBtn/GameBtn";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        {this.props.warningModal && (
          <WarningModal closeModal={this.props.closeModal} />
        )}
        {this.props.successPlayer.length > 0 && (
          <EndingModal
            successPlayer={this.props.successPlayer}
            resetGame={this.props.resetGame}
          />
        )}
        <div className="App">
          <header className="game-name">Bingo Game</header>
          <div className="game-content">
            <OrderBox gameOrder={this.props.gameOrder} />
            <div className="game-field">
              <div className="bingo-box-wrapper">
                <BingoBox
                  bingoNumber={this.props.bingoNumber1P}
                  completeBingo={this.props.completeBingo1P}
                  gameOrder={this.props.gameOrder}
                  clickCell={this.props.clickCell}
                  team={false}
                  clickWrongCell={this.props.clickWrongCell}
                  clickedNumber={this.props.clickedNumber}
                />
                <BingoBox
                  bingoNumber={this.props.bingoNumber2P}
                  completeBingo={this.props.completeBingo2P}
                  gameOrder={this.props.gameOrder}
                  clickCell={this.props.clickCell}
                  team={true}
                  clickWrongCell={this.props.clickWrongCell}
                  clickedNumber={this.props.clickedNumber}
                />
              </div>
            </div>
            <BingoResult
              completeBingo1P={this.props.completeBingo1P}
              completeBingo2P={this.props.completeBingo2P}
              bingoArray1P={this.props.bingoArray1P}
              bingoArray2P={this.props.bingoArray2P}
            />
            <GameBtn
              onLoad={this.props.onLoad}
              gameState={this.props.gameState}
            />
          </div>
        </div>
      </>
    );
  }
}
export default App;
