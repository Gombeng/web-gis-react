/* eslint-disable react/prop-types */
import { LayersControl, TileLayer } from "react-leaflet";
import { baseLayers } from "../assets/mapBaseLayer";

export default function LayerControlBaseLayer() {
  return (
    <>
      {baseLayers.map((layer, index) => (
        <BaseLayer key={index} {...layer} />
      ))}
    </>
  );
}

function BaseLayer({ name, url, subdomains }) {
  const tileLayer = { url };
  if (subdomains) {
    tileLayer.subdomains = subdomains;
  }
  return (
    <LayersControl.BaseLayer checked={name === "Google Satellite"} name={name}>
      <TileLayer {...tileLayer} />
    </LayersControl.BaseLayer>
  );
}
