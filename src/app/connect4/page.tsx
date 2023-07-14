"use client";

import { useState } from "react";
import { create2DBoard } from "./lib/create2DBoard";
import { BoardCell } from "./components/BoardCell";

export default function Connect4() {
  const [boardState, setBoardState] = useState(create2DBoard());

  console.log('boardState', boardState);

  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24">
      {boardState.map((columns, rowIndex) => {
        return (
          <div key={rowIndex} className="">
            {columns.map((cell, cellIndex) => <BoardCell key={`${rowIndex}-${cellIndex}`} value={cell} />)}
          </div>
        )
      })}
    </main>
  )
}
