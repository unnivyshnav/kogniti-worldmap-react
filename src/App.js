import WorldMap from "./components/WorldMap";
import "./app.css";
import svg from "./svg.svg";

function App() {
  return (
    <div className="App">
      <div className="map">
        <WorldMap />
      </div>
      <div className="svg">
        <div className="img">
          <img src={svg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
