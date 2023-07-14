import { checkForWinner } from '.';
import { DEFAULT_WINNING_MATCH_NUMBER } from '../../constants';
import { BoardCellValue, Board } from '../../types';

describe('checkForWinner()', () => {
  const matchNumber = DEFAULT_WINNING_MATCH_NUMBER;

  describe('when there is no winning match', () => {
    it('should return false', () => {
      const nextMoveRow = 3;
      const nextMoveColumn = 1;
      const board: Board = [
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
        [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
      ];
      const result = checkForWinner(
        matchNumber,
        board,
        BoardCellValue.Player1,
        nextMoveRow,
        nextMoveColumn,
      );
      expect(result).toBe(false);
    });
  });

  describe('vertical matching', () => {
    describe('when there is a winner match at the start of series', () => {
      it('should return true', () => {
        const nextMoveRow = 0;
        const nextMoveColumn = 1;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match in the middle of series', () => {
      it('should return true', () => {
        const nextMoveRow = 2;
        const nextMoveColumn = 1;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match towards the end of series', () => {
      it('should return true', () => {
        const nextMoveRow = 4;
        const nextMoveColumn = 1;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });
  });

  describe('horizontal matching', () => {
    describe('when there is a winner match at the start of series', () => {
      it('should return true', () => {
        const nextMoveRow = 2;
        const nextMoveColumn = 1;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.Player1, BoardCellValue.Player1],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match in the middle of series', () => {
      it('should return true', () => {
        const nextMoveRow = 1;
        const nextMoveColumn = 3;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.Player1],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match towards the end of series', () => {
      it('should return true', () => {
        const nextMoveRow = 2;
        const nextMoveColumn = 3;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.Player1, BoardCellValue.Player1, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });
  });

  describe('across left to right matching', () => {
    describe('when there is a winner match at the start of series', () => {
      it('should return true', () => {
        const nextMoveRow = 0;
        const nextMoveColumn = 0;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match in the middle of series', () => {
      it('should return true', () => {
        const nextMoveRow = 3;
        const nextMoveColumn = 3;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match towards the end of series', () => {
      it('should return true', () => {
        const nextMoveRow = 3;
        const nextMoveColumn = 3;
        const board: Board = [
          [BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });
  });

  describe('across right to left matching', () => {
    describe('when there is a winner match at the start of series', () => {
      it('should return true', () => {
        const nextMoveRow = 4;
        const nextMoveColumn = 0;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match in the middle of series', () => {
      it('should return true', () => {
        const nextMoveRow = 2;
        const nextMoveColumn = 2;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });

    describe('when there is a winner match towards the end of series', () => {
      it('should return true', () => {
        const nextMoveRow = 1;
        const nextMoveColumn = 3;
        const board: Board = [
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.NotSelected, BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected],
          [BoardCellValue.Player1, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected, BoardCellValue.NotSelected]
        ];
        const result = checkForWinner(
          matchNumber,
          board,
          BoardCellValue.Player1,
          nextMoveRow,
          nextMoveColumn,
        );
        expect(result).toBe(true);
      });
    });
  });
});
