import { color } from "framer-motion"
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combos";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Helper functions to derive state w/o interfering w/App
function deriveActivePlayer(gameTurns) {
// Example of derived state below:
  let currrentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currrentPlayer = 'O';
  }
  return currrentPlayer;  
}

function deriveGameBoard(gameTurns) {//example of derived state
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    for (const turn of gameTurns) {//if array is empty, JS will not execute for loop
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    } 
    return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for ( const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)  {
        winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  // need to use state funx to keep track of players
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  
  
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns)  ;
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns];
      return updatedTurns;
    });
  }  

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
      setPlayers(prevPlayers => {
        return {
          ...prevPlayers,
          [symbol]: newName
        };
      })
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} 
        onChangeName={handlePlayerNameChange}/>
        <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'}
        onChangeName={handlePlayerNameChange}/>
               
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>

  <Log turns={gameTurns}/>{/*can keep track of state in a list*/}
  </main>;
  

}

export default App
