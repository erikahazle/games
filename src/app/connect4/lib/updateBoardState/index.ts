import { Board, BoardCellValue } from "../../types";

export const updateBoardState = (boardState: Board, row: number, column: number, value: BoardCellValue) => {
  const currentCellValue = boardState[row][column];

  if (currentCellValue !== BoardCellValue.NotSelected) {
    return boardState;
  }

  let updatedBoardState = boardState.map(row => [...row]);
  
  updatedBoardState[row][column] = value;
  
  return updatedBoardState;
}