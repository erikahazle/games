import { NOT_SELECTED_COLOUR, PLAYER1_CELL_COLOUR, PLAYER2_CELL_COLOUR } from "@/app/connect4/constants";
import { BoardCellValue } from "@/app/connect4/types";

export const getCellBackground = (value: BoardCellValue) => {
  switch(value) {
    case BoardCellValue.Player1:
      return `w-24 h-24 border-slate-300 border-2 bg-orange-300`;
    case BoardCellValue.Player2:
      return `w-24 h-24 border-slate-300 border-2 bg-cyan-500`;
    default:
      return `w-24 h-24 border-slate-300 border-2 bg-gray-50`;
  }
}