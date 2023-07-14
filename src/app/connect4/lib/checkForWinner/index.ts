import { DEFAULT_WINNING_MATCH_NUMBER } from '../../constants';
import { Board, NextMoveValue } from '../../types';

function hasMatchInDirection(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
  rowOffset: number,
  columnOffset: number,
) {
  let cellsMatched = 1;

  // check in one direction
  for (let i = 1; i < matchNumber; i++) {
    if (board[nextMoveRow + i * rowOffset]?.[nextMoveColumn + i * columnOffset] !== nextMoveValue) {
      break;
    }

    cellsMatched++;

    if (cellsMatched === matchNumber) {
      return true;
    }
  }

  // check in the other direction
  for (let i = 1; i < matchNumber; i++) {
    if (board[nextMoveRow - i * rowOffset]?.[nextMoveColumn - i * columnOffset] !== nextMoveValue) {
      break;
    }

    cellsMatched++;

    if (cellsMatched === matchNumber) {
      return true;
    }
  }

  return false;
};

export function checkForWinner(
  matchNumber: number = DEFAULT_WINNING_MATCH_NUMBER,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
){
  return (
    hasMatchInDirection(matchNumber, board, nextMoveValue, nextMoveRow, nextMoveColumn, 0, 1) ||
    hasMatchInDirection(matchNumber, board, nextMoveValue, nextMoveRow, nextMoveColumn, 1, 0) ||
    hasMatchInDirection(matchNumber, board, nextMoveValue, nextMoveRow, nextMoveColumn, 1, 1) ||
    hasMatchInDirection(matchNumber, board, nextMoveValue, nextMoveRow, nextMoveColumn, 1, -1)
  );
};
