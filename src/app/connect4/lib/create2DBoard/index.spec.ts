import { create2DBoard } from ".";
import { DEFAULT_BOARD_COLUMN_NUMBER, DEFAULT_BOARD_ROW_NUMBER } from "../../constants";

describe('create2DBoard()', () => {
  describe.each`
    rows
    ${1}
    ${2}
    ${3}
    ${4}
  `('when it has $rows rows as parameter', ({ rows }) => {
    it('should have the same amount of rows as passed in', () => {
      const result = create2DBoard(rows);
      expect(result).toHaveLength(rows);
    });
  });

  describe('when no rows number is provided', () => {
    it('should return DEFAULT_BOARD_ROW_NUMBER rows', () => {
      const result = create2DBoard();
      expect(result).toHaveLength(DEFAULT_BOARD_ROW_NUMBER);
    })
  });

  describe.each`
    columns
    ${1}
    ${2}
    ${3}
    ${4}
  `('when it has $columns columns as parameter', ({ columns }) => {
    it('should have the same amount of rows as passed in', () => {
      const result = create2DBoard(undefined, columns);
      result.forEach((row) => expect(row).toHaveLength(columns));
    });
  });

  describe('when no columns number is provided', () => {
    it('should return DEFAULT_BOARD_COLUMN_NUMBER rows', () => {
      const result = create2DBoard();
      result.forEach((row) => expect(row).toHaveLength(DEFAULT_BOARD_COLUMN_NUMBER));
    })
  });
});
