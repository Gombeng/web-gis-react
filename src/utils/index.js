import { polygon } from "../assets/polygonTpi";

export function getRandomLatLngInPolygon(polygon) {
  const latitudes = polygon.map((point) => point[0]);
  const longitudes = polygon.map((point) => point[1]);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  function isPointInPolygon(point, vs) {
    const x = point[1],
      y = point[0];
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      const xi = vs[i][1],
        yi = vs[i][0];
      const xj = vs[j][1],
        yj = vs[j][0];
      const intersect =
        yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  let randomLat, randomLng;
  do {
    randomLat = Math.random() * (maxLat - minLat) + minLat;
    randomLng = Math.random() * (maxLng - minLng) + minLng;
  } while (!isPointInPolygon([randomLat, randomLng], polygon));

  return [randomLat, randomLng];
}

export function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

export function generateKecamatanData(numKecamatan, radius) {
  function printRange(number) {
    return number >= 0 && number <= 300
      ? { color: "green", drugSpread: "Low" }
      : number <= 600
      ? { color: "yellow", drugSpread: "Medium" }
      : { color: "red", drugSpread: "High" };
  }

  const data = [];
  for (let i = 0; i < numKecamatan; i++) {
    const randomNumber = getRandomNumber(1001);
    const { color, drugSpread } = printRange(randomNumber);
    const [lat, lng] = getRandomLatLngInPolygon(polygon);
    data.push({
      id: `Kecamatan-${i + 1}`,
      lat: lng.toFixed(7),
      lng: lat.toFixed(7),
      randomNumber,
      color,
      drugSpread,
      radius: radius,
    });
  }
  return data;
}
