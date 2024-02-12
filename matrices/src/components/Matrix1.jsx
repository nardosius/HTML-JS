import { useState } from "react";

export default function Matrix1({ matrix }) {

    const [matrixSquare, setMatrixSquare] = useState(matrix);

    function handleSelectSquare(rowIndex, colIndex) {
        setMatrixSquare((prevMatrix) => {
            const updatedMatrix = [...prevMatrix.map(innerArray => [...innerArray])];
            updatedMatrix[rowIndex][colIndex] = '$';
            return updatedMatrix;
        });
    }
    
    return (
        <ol id="matrix">
        {matrixSquare.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                    ))}
            </ol>
        </li>
        ))}  
        {/**"board" represents the entire array of arrays that is defined in the const var "initialGameboard". "row" represents an inner array contained within initialGameboard. To access all of the elements in the inner arrays, we loop over them with an enhanced for loop (see function deriveGameboard in App.jsx) */}  
    </ol>
    //remember, when elements are mapped, they really need a KEY! Anytime you equate a var w/ a funx, need to pass all appropriate args that original funx requires; see onSelectSquare
    );
}