import "./worldmap.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function WorldMap() {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <div className="worldmap">
      <ComposableMap className="geography">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} className />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
