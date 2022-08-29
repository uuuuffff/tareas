import "./App.css";
import LogoStudioA from "./imagenes/StudioA.png";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecode-logo-contenedor">
        <img
          src={LogoStudioA}
          className="freecodecamp-logo"
          alt="aqui va el alt"
        />
      </div>

      <div className="tareas-lista-principal">
        <h1>Lista tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
