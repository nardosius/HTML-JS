export default function Log({ turns }) {//"turns" pulled from "gameTurns" in App.js        
    
    return <ol id="log">
        {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li> )}

    </ol>
}