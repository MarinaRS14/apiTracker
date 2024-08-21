import React from 'react';
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

function SetViewOnClick({ position }) {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
}

const customMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

function MapBlock() {
  const { latitude, longitude } = useSelector((state) => state.search);

  const position = [latitude, longitude];
  return (
    <MapContainer
      zoomControl={false}
      center={position}
      zoom={9}
      scrollWheelZoom={false}
      style={{ minHeight: '100%', height: '100%' }}>
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=3tT4H5qHpo9xwGAGitRd"
      />
      <Marker position={position} icon={customMarker}></Marker>
      <SetViewOnClick position={position} />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}

export default MapBlock;
