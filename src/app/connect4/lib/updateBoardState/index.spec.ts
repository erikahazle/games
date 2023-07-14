import { updateBoardState } from ".";
import { Board, BoardCellValue } from "../../types";

describe('updateBoardState()', () => {
  describe('when the next move cell is NOT already selected', () => {
    it('should return new board state with updated value', () => {
      const board: Board = [
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
      ];
      const row = 0;
      const column = 0;
      const value = BoardCellValue.Player1;
      const result = updateBoardState(board, row, column, value);
  
      expect(result).toEqual([
        [BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
      ]);
    });
  });

  describe('when the next move cell is already selected', () => {
    it('should return new board state with updated value', () => {
      const board: Board = [
        [BoardCellValue.Player2, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
      ];
      const row = 0;
      const column = 0;
      const value = BoardCellValue.Player1;
      const result = updateBoardState(board, row, column, value);
  
      expect(result).toEqual(board);
    });
  });
});
