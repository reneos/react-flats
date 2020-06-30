import React, { Component } from 'react';
import {
  Map, TileLayer
} from 'react-leaflet';

class FlatMap extends Component {
  render() {
    return (
      <Map center={[42, 2]} zoom={4}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default FlatMap;
