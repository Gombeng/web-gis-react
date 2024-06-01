/* eslint-disable react/prop-types */
import { LayersControl } from "react-leaflet";
import LayerControlOverlay from "./LayerControlOverlay";
import LayerControlBaseLayer from "./LayerControlBaseLayer";

export default function LayersControlContainer({ kecamatanData }) {
  return (
    <LayersControl position="topright">
      <LayerControlBaseLayer />
      {kecamatanData.map((kecamatan) => (
        <LayerControlOverlay key={kecamatan.name} {...kecamatan} />
      ))}
    </LayersControl>
  );
}
