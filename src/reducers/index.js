import { combineReducers } from "redux";
import {
  ONLOAD,
  CLICK_CELL,
  CLICK_WRONGCELL,
  CLOSE_MODAL,
  RESET_GAME
} from "../constants/actionTypes";
import {
  makingNumberFunction,
  makingBingoFunction,
  checkingBingoFunction
} from "./util";
const initialState = {
  bingoNumber1P: null,
  bingoNumber2P: null,
  bingoArray1P: null,
  bingoArray2P: null,
  completeBingo1P: null,
  completeBingo2P: null,
  successPlayer: [],
  gameState: null,
  gameOrder: false,
  warningModal: false,
  clickedNumber: []
};
export function bingoReducers(state = initialState, action) {
  switch (action.type) {
    case ONLOAD:
      var bingoNumber1P = [];
      var num1Array = [];
      var bingoArray1P = [];
      var bingoNumber2P = [];
      var num2Array = [];
      var bingoArray2P = [];
      makingNumberFunction(num1Array, bingoNumber1P);
      makingNumberFunction(num2Array, bingoNumber2P);
      makingBingoFunction(num1Array, bingoArray1P);
      makingBingoFunction(num2Array, bingoArray2P);
      return Object.assign(
        { ...state },
        {
          bingoNumber1P: num1Array,
          bingoNumber2P: num2Array,
          bingoArray1P: bingoArray1P,
          bingoArray2P: bingoArray2P,
          completeBingo1P: null,
          completeBingo2P: null,
          gameState: true,
          gameOrder: false,
          warningModal: false,
          clickedNumber: [],
          successPlayer: []
        }
      );
    case CLICK_CELL:
      state.clickedNumber.push(action.number);
      var complete1P = checkingBingoFunction(
        state.clickedNumber,
        state.bingoArray1P
      );
      var complete2P = checkingBingoFunction(
        state.clickedNumber,
        state.bingoArray2P
      );
      if (complete1P.length >= 5) state.successPlayer.push("1P");
      if (complete2P.length >= 5) state.successPlayer.push("2P");
      return Object.assign(
        { ...state },
        {
          gameOrder: !action.order,
          clickedNumber: state.clickedNumber,
          completeBingo1P: complete1P,
          completeBingo2P: complete2P,
          successPlayer: state.successPlayer
        }
      );
    case CLICK_WRONGCELL:
      return Object.assign(
        { ...state },
        {
          warningModal: true
        }
      );
    case CLOSE_MODAL:
      return Object.assign(
        { ...state },
        {
          warningModal: false
        }
      );
    case RESET_GAME:
      return Object.assign(
        { ...state },
        {
          bingoNumber1P: null,
          bingoNumber2P: null,
          bingoArray1P: null,
          bingoArray2P: null,
          completeBingo1P: null,
          completeBingo2P: null,
          successPlayer: [],
          gameState: null,
          gameOrder: false,
          warningModal: false,
          clickedNumber: []
        }
      );
    default:
      return state;
  }
}
export default combineReducers({
  bingo: bingoReducers
});
