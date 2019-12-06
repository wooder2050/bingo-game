import { connect } from "react-redux";
import App from "../components/App/App";
import {
  ONLOAD,
  CLICK_CELL,
  CLICK_WRONGCELL,
  CLOSE_MODAL,
  RESET_GAME
} from "../constants/actionTypes";

const mapStateToProps = state => {
  const {
    bingoNumber1P,
    bingoNumber2P,
    bingoArray1P,
    bingoArray2P,
    completeBingo1P,
    completeBingo2P,
    successPlayer,
    gameState,
    gameOrder,
    warningModal,
    clickedNumber
  } = state.bingo;

  return {
    bingoNumber1P,
    bingoNumber2P,
    bingoArray1P,
    bingoArray2P,
    completeBingo1P,
    completeBingo2P,
    successPlayer,
    gameState,
    gameOrder,
    warningModal,
    clickedNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      dispatch({
        type: ONLOAD
      });
    },
    clickCell(order, number) {
      dispatch({
        type: CLICK_CELL,
        order,
        number
      });
    },
    clickWrongCell() {
      dispatch({
        type: CLICK_WRONGCELL
      });
    },
    closeModal() {
      dispatch({
        type: CLOSE_MODAL
      });
    },
    resetGame() {
      dispatch({
        type: RESET_GAME
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
