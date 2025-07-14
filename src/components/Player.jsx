import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handelEditClick() {
    setIsEditing(editing => !editing);
    
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handelChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive && "active"}>
      <span className="player">
        {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} onChange={handelChange} required />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}