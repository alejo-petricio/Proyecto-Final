import { useState } from "react";
function GameCard({
  nombre,
  genero,
  plataforma,
  estado,
  calificacion,
  tiempo_jugado,
  onDelete,
  onUpdate,
}) {
  const [newEstado, setNewEstado] = useState(estado);
  const [newCalificacion, setNewCalificacion] = useState(calificacion);
  const [newTiempo, setNewTiempo] = useState(tiempo_jugado);

  const handleUpdate = () => {
    onUpdate({
      estado: newEstado,
      calificacion: newCalificacion,
      tiempo_jugado: newTiempo,
    });
  };

  return (
    <div className="card-container">
      <h3 className="card-nombre">{nombre}</h3>
      <p className="card-genero">{genero}</p>
      <p className="card-plataforma">{plataforma}</p>
      <label>Estado:</label>
      <select value={newEstado} onChange={(e) => setNewEstado(e.target.value)}>
        <option value="pendiente">pendiente</option>
        <option value="jugando">jugando</option>
        <option value="completado">completado</option>
      </select>

      <label>Calificación:</label>
      <input
        type="number"
        min="0"
        max="10"
        value={newCalificacion}
        onChange={(e) => setNewCalificacion(e.target.value)}
      />

      <label>Tiempo Jugado:</label>
      <input
        type="text"
        value={newTiempo}
        onChange={(e) => setNewTiempo(e.target.value)}
      />

      <button onClick={handleUpdate}>Actualizar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default GameCard;
