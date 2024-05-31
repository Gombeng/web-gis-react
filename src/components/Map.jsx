/* eslint-disable no-unused-vars */
import { MapContainer } from "react-leaflet";
import { generateKecamatanData, getRandomNumber } from "../utils";
import LayersControlContainer from "./LayerControlContainer";
import Header from "./Header";

export default function Map() {
  const amount = 7;
  const kecamatanData = generateKecamatanData(amount, 6000);
  const { lat, lng } = kecamatanData[getRandomNumber(amount)];

  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={[lat, lng]}
      zoom={11}
    >
      <Header />
      <LayersControlContainer kecamatanData={kecamatanData} />
    </MapContainer>
  );
}
