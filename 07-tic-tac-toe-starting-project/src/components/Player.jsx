import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [ playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        //need to update based on previous state, should pass function rather than a set logic value change, e.g, "!isEditing". React does not execute instantly; state changes are sheduled for when the composer can actually get to it.
        setIsEditing((shit) => !shit);
        //the preceding is weird. It does not matter what var is used. the var to !var funx construction simply triggers a flip-flop situation in which the var's value goes from true to false and vice versa with each button click. The var name does not matter. I call this a non-concrete funx since the var consumed does not require a foundation anywhere else in the code.
        
    }
    function handleChange(e) {
        console.log(e);
        setPlayerName(e.target.value);
//ANY time you are trying to set and save the state by entering a value into a field, you MUST use "e.target.value" as an arg for the set() funx.
    }

    let enteredName = <span className="player-name">{playerName}</span>;
    
    if (isEditing) {
        enteredName = <input type="text" required value={playerName} onChange={handleChange}/>
        
    }
    
    return ( 
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
    {enteredName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
  </li>
    );
}