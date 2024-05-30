import { Circle, LayerGroup, LayersControl, Tooltip } from "react-leaflet";

export default function LayerControlOverlay(kecamatan) {
  return (
    <LayersControl.Overlay checked name={kecamatan.id}>
      <LayerGroup>
        <Circle
          center={[kecamatan.lat, kecamatan.lng]}
          pathOptions={{
            color: kecamatan.color,
            fillColor: kecamatan.color,
          }}
          radius={kecamatan.radius}
        >
          <Tooltip direction="bottom" offset={[1.7, 1]} opacity={1}>
            <p>Spread of Drugs: {kecamatan.drugSpread}</p>
            <p>Visits: {kecamatan.randomNumber} times</p>
          </Tooltip>
        </Circle>
      </LayerGroup>
    </LayersControl.Overlay>
  );
}
