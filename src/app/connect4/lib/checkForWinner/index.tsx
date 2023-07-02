import { Board, NextMoveValue } from '../../types';

function isVerticalMatch(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
) {
  let cellsMatched = 1;

  // check rows above for matches
  for (let i = nextMoveRow; i < nextMoveRow - matchNumber; i += 1) {
    if (board[i][nextMoveColumn] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;
  }

  // check rows below for matches
  for (let i = nextMoveRow; i < nextMoveRow - matchNumber; i -= 1) {
    if (board[i][nextMoveColumn] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;
  }

  if (cellsMatched === matchNumber) {
    return true;
  }
};

export function checkForWinner(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
){
  /**
   * board
   * [
   *  [null, null, null, null, null]
   *  [null, null, null, null, null]
   *  [null, null,   P1, null, null]
   *  [null, null, null, null, null]
   *  [null, null, null, null, null]
   * ]
   * 
   * isVerticalMatch
   * isHorizontalMatch
   * isMatchAcrossLeftToRight
   * isMatchAcrossRightToLeft
  */

  if (isVerticalMatch(
    matchNumber,
    board,
    nextMoveValue,
    nextMoveRow,
    nextMoveColumn
  )) {
    return true;
  }

  return false;
};
