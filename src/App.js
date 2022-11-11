import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const nextPlayer = player === "X" ? "O" : "X";

  const handleClick = (index) => {
    if (winner || draw) return;
    if (board[index]) {
      alert("Not A Valid Move");
      return;
    }
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    const winningCombos = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(player);
        return;
      }
    }
    if (!newBoard.includes(null) && !winner) {
      setDraw(true);
    }
    setPlayer(nextPlayer);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setDraw(false);
  };

  return (
    <div className="GameContainer">
      <p className="CurrentPlayer">Current Player: {player}</p>
      <div className="Board">
        <table className="GameWrapper">
          <tbody>
            <trow>
              <td
                className="GameCell"
                id={0}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[0]}
              </td>
              <td
                className="GameCell"
                id={1}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[1]}
              </td>
              <td
                className="GameCell"
                id={2}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[2]}
              </td>
            </trow>
          </tbody>
          <tbody>
            <trow>
              <td
                className="GameCell"
                id={3}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[3]}
              </td>
              <td
                className="GameCell"
                id={4}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[4]}
              </td>
              <td
                className="GameCell"
                id={5}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[5]}
              </td>
            </trow>
          </tbody>
          <tbody>
            <trow>
              <td
                className="GameCell"
                id={6}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[6]}
              </td>
              <td
                className="GameCell"
                id={7}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[7]}
              </td>
              <td
                className="GameCell"
                id={8}
                onClick={(e) => handleClick(e.target.id)}
              >
                {board[8]}
              </td>
            </trow>
          </tbody>
        </table>
      </div>
      {winner ? (
        <div className="Winner">
          <p>Congratulations {winner}! You are the winner!</p>
        </div>
      ) : null}
      {draw ? (
        <div className="Draw">
          <p>It's a draw!</p>
        </div>
      ) : null}
      {winner || draw ?
        <button className="ResetButton" onClick={handleReset}>
        Play Again
      </button> : <button className="ResetButton" onClick={handleReset}>
        Reset
      </button>}
    </div>
  );
}

export default App;
