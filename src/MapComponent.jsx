import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  CircleMarker,
} from "react-leaflet";

export default function MapComponent() {
  const tpiLatLngs = [0.914, 104.473];
  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={tpiLatLngs}
      zoom={11}
      scrollWheelZoom={false}
      touchZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={tpiLatLngs}>
        <Popup>
          <p>wassap ma bro</p>
          <p>wassap ma bro</p>
          <p>wassap ma bro</p>
        </Popup>
      </Marker>

      <CircleMarker
        center={tpiLatLngs}
        pathOptions={{ color: "red" }}
        radius={100}
      >
        <Tooltip direction="bottom" offset={[1.7, 1]} opacity={1}>
          permanent Tooltip
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
