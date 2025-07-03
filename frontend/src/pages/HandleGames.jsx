import { useState, useEffect } from "react";
import "../styles/gameCard.css";
import GameCard from "../components/GameCard";

function HandleGames() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/games")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los juegos");
        }
        return res.json();
      })
      .then((data) => {
        setJuegos(data);
        console.log(data);
      })
      .catch((error) => console.error("Error en fetch:", error));
  }, []);
  const updateGame = async (id, newInfo) => {
    await fetch(`http://localhost:3001/api/games/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    });
    setJuegos(juegos.map((j) => (j.id === id ? { ...j, ...newInfo } : j)));
  };
  const deleteGame = (id) => {
    fetch(`http://localhost:3001/api/games/${id}`, {
      method: "DELETE",
    }).then(() => setJuegos(juegos.filter((j) => j.id !== id)));
  };

  return (
    <div className="juego-grid">
      {juegos.map((juego, index) => (
        <GameCard
          key={`juegokey - ${index}`}
          nombre={juego.nombre}
          genero={juego.genero}
          plataforma={juego.plataforma}
          estado={juego.estado}
          calificacion={juego.calificacion}
          tiempo_jugado={juego.tiempo_jugado}
          onDelete={() => deleteGame(juego.id)}
          onUpdate={(data) => updateGame(juego.id, data)}
        />
      ))}
    </div>
  );
}

export default HandleGames;
