import { Board, NextMoveValue } from '../../types';

function hasVerticalMatch(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
) {
  let cellsMatched = 1;

  // check rows above for matches
  for (let i = nextMoveRow - 1; i > nextMoveRow - matchNumber; i -= 1) {
    if (board[i]?.[nextMoveColumn] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
  }

  // check rows below for matches
  for (let i = nextMoveRow + 1; i < nextMoveRow + matchNumber; i += 1) {
    if (board[i]?.[nextMoveColumn] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
  }

  if (cellsMatched === matchNumber) {
    return true;
  }
};


function hasHorizontalMatch(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
) {
  let cellsMatched = 1;

  // check columns to the left for matches
  for (let i = nextMoveColumn - 1; i > nextMoveColumn - matchNumber; i -= 1) {
    if (board[nextMoveRow]?.[i] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
  }

  // check columns to the right for matches
  for (let i = nextMoveColumn + 1; i < nextMoveColumn + matchNumber; i += 1) {
    if (board[nextMoveRow]?.[i] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    // break early if winning match has found
    if (cellsMatched === matchNumber) {
      break;
    }
  }

  if (cellsMatched === matchNumber) {
    return true;
  }
};

function hasMatchAcrossLeftToRight(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
) {
  let cellsMatched = 1;

  // check for matches down
  for (let i = 1; i <= matchNumber; i += 1) {
    if (board[nextMoveRow + i]?.[nextMoveColumn + i] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
  }

  // check for matches up
  for (let i = 1; i <= matchNumber; i += 1) {
    if (board[nextMoveRow - i]?.[nextMoveColumn - i] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
  }

  if (cellsMatched === matchNumber) {
    return true;
  }
};


function hasMatchAcrossRightToLeft(
  matchNumber: number = 4,
  board: Board,
  nextMoveValue: NextMoveValue,
  nextMoveRow: number,
  nextMoveColumn: number,
) {
  let cellsMatched = 1;

  // check for matches down
  for (let i = 1; i <= matchNumber; i += 1) {
    if (board[nextMoveRow + i]?.[nextMoveColumn - i] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
  }

  // check for matches up
  for (let i = 1; i <= matchNumber; i += 1) {
    if (board[nextMoveRow - i]?.[nextMoveColumn + i] !== nextMoveValue) {
      break;
    }

    cellsMatched += 1;

    if (cellsMatched === matchNumber) {
      break;
    }
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
  const isVerticalMatch = hasVerticalMatch(
    matchNumber,
    board,
    nextMoveValue,
    nextMoveRow,
    nextMoveColumn
  );

  const isHorizontalMatch = hasHorizontalMatch(matchNumber,
    board,
    nextMoveValue,
    nextMoveRow,
    nextMoveColumn);

  const isMatchAcrossLeftToRight = hasMatchAcrossLeftToRight(matchNumber,
    board,
    nextMoveValue,
    nextMoveRow,
    nextMoveColumn)

  const isMatchAcrossRightToLeft = hasMatchAcrossRightToLeft(matchNumber,
    board,
    nextMoveValue,
    nextMoveRow,
    nextMoveColumn);

  if (isVerticalMatch
    || isHorizontalMatch
    || isMatchAcrossLeftToRight
    || isMatchAcrossRightToLeft) {
    return true;
  }

  return false;
};
