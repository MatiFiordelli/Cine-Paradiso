import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position = [-32.88941574, -68.84461975];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "25rem", width: "100%" }}
      aria-label="Mapa"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Bienvenido a Cine Paradiso</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
