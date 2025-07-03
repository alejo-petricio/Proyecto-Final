import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HandleGames from "./pages/HandleGames";
import NewGame from "./pages/NewGame";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <nav className="navbar">
          <Link to="/">Lista de Juegos</Link>
          <Link to="/nuevo">Agregar Juego</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HandleGames />} />
            <Route path="/nuevo" element={<NewGame />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
