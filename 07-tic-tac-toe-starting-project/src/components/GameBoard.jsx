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
    /*END DEPRECATED CODE */
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
    {/**"board" represents the entire array of arrays that is defined in the const var "initialGameboard". "row" represents an inner array contained within initialGameboard. To access all of the elements in the inner arrays, we loop over them with an enhanced for loop (see function deriveGameboard in App.jsx) */}
    </ol>//remember, when elements are mapped, they really need a KEY! Anytime you equate a var w/ a funx, need to pass all appropriate args that original funx requires; see onSelectSquare
    );
}