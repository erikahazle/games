export enum BoardCellValue {
  NotSelected = 0,
  Player1 = 1,
  Player2 = 2
};

export type NextMoveValue = BoardCellValue.Player1 | BoardCellValue.Player2;

export type Board = BoardCellValue[][];
