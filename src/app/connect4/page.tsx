"use client";

import { useState } from "react";
import { create2DBoard } from "./lib/create2DBoard";
import { BoardCell } from "./components/BoardCell";
import { Board, BoardCellValue } from "./types";
import { checkForWinner } from "./lib/checkForWinner";
import { DEFAULT_WINNING_MATCH_NUMBER } from "./constants";
import { updateBoardState } from "./lib/updateBoardState";

type CurrentPlayer = BoardCellValue.Player1 | BoardCellValue.Player2;

export default function Connect4() {
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(BoardCellValue.Player1);
  const [boardState, setBoardState] = useState<Board>(create2DBoard());

  const handlePlayerTurn = () => {
    setCurrentPlayer(previousPlayer => (
      previousPlayer === BoardCellValue.Player1
        ? BoardCellValue.Player2
        : BoardCellValue.Player1
    ))
  }

  const handleCellClick = (row: number, column: number, currentValue: BoardCellValue) => {
    if (currentValue !== BoardCellValue.NotSelected) {
      return;
    }

    setBoardState((previousBoardState) => updateBoardState(
      previousBoardState,
      row,
      column,
      currentPlayer
    ));

    const hasWinningMatch = checkForWinner(
      DEFAULT_WINNING_MATCH_NUMBER,
      boardState,
      currentPlayer,
      row,
      column
    );

    if (hasWinningMatch) {
      alert(`${currentPlayer} wins the match`);
      // clear the board to start from scratch
    }

    handlePlayerTurn();
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24">
      {boardState.map((columns, rowIndex) => {
        return (
          <div key={rowIndex} className="">
            {columns.map((cell, columnIndex) => (
              <BoardCell
                key={`${rowIndex}-${columnIndex}`}
                value={cell}
                handleClick={handleCellClick}
                row={rowIndex}
                column={columnIndex}
              />
            ))}
          </div>
        )
      })}
    </main>
  )
}
function updatedBoardState(): Board {
  throw new Error("Function not implemented.");
}

