export default function GameBoard({ onSelectSquare, board }) {
    /*BEGIN DEPRECATED CODE */ 
//nested map() yields a grid
// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) =>  {
//             const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//             updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//             return updatedBoard;
//     });

//     onSelectSquare();//actually calling handleSelectSquare() from App.jsx
// }

    return (
    <ol id="game-board">
        {board.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>
                    ))}
            </ol>
        </li>
        ))}
    
    </ol>//remember, when elements are mapped, they really need a KEY!
    );
}