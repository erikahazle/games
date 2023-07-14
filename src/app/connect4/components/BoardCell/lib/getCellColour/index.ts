import { NOT_SELECTED_COLOUR, PLAYER1_CELL_COLOUR, PLAYER2_CELL_COLOUR } from "@/app/connect4/constants";
import { BoardCellValue } from "@/app/connect4/types";

export const getCellColour = (value: BoardCellValue) => {
  switch(value) {
    case BoardCellValue.Player1:
      return PLAYER1_CELL_COLOUR;
    case BoardCellValue.Player2:
      return PLAYER2_CELL_COLOUR;
    default:
      return NOT_SELECTED_COLOUR;
  }
}