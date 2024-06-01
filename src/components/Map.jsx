/* eslint-disable no-unused-vars */
import { MapContainer } from "react-leaflet";
import Header from "./Header";
import LayersControlContainer from "./LayerControlContainer";
import { coordinates } from "../assets/polygonTpi";

export default function Map() {
  const point = [0.914599, 104.516883];
  return (
    <MapContainer style={{ height: "100vh" }} center={point} zoom={11.5}>
      <Header />
      <LayersControlContainer kecamatanData={coordinates} />
    </MapContainer>
  );
}
