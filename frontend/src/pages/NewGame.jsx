import { useState } from "react";
import "../styles/gameForm.css";
import GameForm from "../components/GameForm";

function NewGame() {
  const [juegos, setJuegos] = useState([]);
  const createGame = async (newGame) => {
    await fetch(`http://localhost:3001/api/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    });
    setJuegos((j) => [...j, newGame]);
  };
  return (
    <>
      <GameForm onSubmit={createGame} />
    </>
  );
}

export default NewGame;
