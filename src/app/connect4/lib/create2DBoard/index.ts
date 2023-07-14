import { DEFAULT_BOARD_CELL_VALUE, DEFAULT_BOARD_COLUMN_NUMBER, DEFAULT_BOARD_ROW_NUMBER } from "../../constants";
import { Board, BoardCellValue } from "../../types";

export const create2DBoard = (
  rows: number = DEFAULT_BOARD_ROW_NUMBER,
  columns: number = DEFAULT_BOARD_COLUMN_NUMBER
): Board => {
  const row: BoardCellValue[] = Array(columns).fill(DEFAULT_BOARD_CELL_VALUE);
  return Array.from({ length: rows }, () => [...row]);
};
