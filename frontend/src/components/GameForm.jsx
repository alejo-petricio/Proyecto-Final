import { useState } from "react";

function GameForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    genero: "",
    plataforma: "",
    estado: "pendiente",
    calificacion: "",
    tiempo_jugado: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nombre: "",
      genero: "",
      plataforma: "",
      estado: "pendiente",
      calificacion: "",
      tiempo_jugado: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Agregar Juego</h1>
      <form>
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label for="genero">Género:</label>
        <input
          type="text"
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        />

        <label for="plataforma">Plataforma:</label>
        <input
          type="text"
          id="plataforma"
          name="plataforma"
          value={formData.plataforma}
          onChange={handleChange}
          required
        />

        <label for="estado">Estado:</label>
        <select
          id="estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
        >
          <option value="pendiente">pendiente</option>
          <option value="jugando">jugando</option>
          <option value="completado">completado</option>
        </select>

        <label for="calificacion">Calificación (1 a 10):</label>
        <input
          type="number"
          id="calificacion"
          name="calificacion"
          min="1"
          max="10"
          value={formData.calificacion}
          onChange={handleChange}
        />

        <label for="tiempo_jugado">Tiempo Jugado (horas):</label>
        <input
          type="number"
          id="tiempo_jugado"
          name="tiempo_jugado"
          value={formData.tiempo_jugado}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default GameForm;
