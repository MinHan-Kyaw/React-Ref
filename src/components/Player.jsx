import { useState, useRef } from "react";

export default function Player() {
  const PlayerName = useRef();
  const [enteredPlayerName, setEnterPlayerName] = useState(null);

  function handleClick() {
    setEnterPlayerName(PlayerName.current.value);
    PlayerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={PlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}


