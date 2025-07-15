import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🎮 Bienvenido a tu Colección de VideoJuegos</h1>
        <p>
          Controlá tus juegos, calificalos, y llevá el registro de lo que estás
          jugando.
        </p>

        <div className="home-buttons">
          <Link to="/juegos" className="button-neon">
            Ver Juegos
          </Link>
          <Link to="/nuevo" className="button-neon">
            Agregar Juego
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
