import React from 'react';
import L from 'leaflet';
import {
  Map, TileLayer, Marker
} from 'react-leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const FlatMap = ({ long, lat, marked }) => {
  const flatMarker = marked ? <Marker position={[lat, long]} /> : null;
  return (
    <Map center={[lat, long]} zoom={20}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flatMarker}
    </Map>
  );
};

export default FlatMap;
