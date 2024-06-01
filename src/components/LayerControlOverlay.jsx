import { LayerGroup, LayersControl, Polygon, Tooltip } from "react-leaflet";
import { getRandomColor, getRandomNumber, swapLatLng } from "../utils";
export default function LayerControlOverlay(kecamatan) {
  const randomNumberDrugs = getRandomNumber(1000);
  const randomNumberVisits = getRandomNumber(1000);
  const color = getRandomColor();

  return (
    <LayersControl.Overlay checked key={kecamatan.name} name={kecamatan.name}>
      <LayerGroup>
        <Polygon
          pathOptions={{ color: color }}
          positions={swapLatLng(kecamatan.coordinates)}
        >
          <Tooltip direction="bottom" offset={[1.7, 1]} opacity={1}>
            <div
              style={{
                width: "fit-content",
                padding: "1rem 2rem",
                textAlign: "center",
                border: `3px solid ${color}`,
              }}
            >
              <h3>{kecamatan.name}</h3>
              <p>Spread of Drugs: {randomNumberDrugs}</p>
              <p>Visits: {randomNumberVisits} times</p>
            </div>
          </Tooltip>
        </Polygon>
      </LayerGroup>
    </LayersControl.Overlay>
  );
}
