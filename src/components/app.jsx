import React, { Component } from 'react';
import FlatList from './flat_list';
import FlatMap from './flat_map';

class App extends Component {
  constructor() {
    super();
    this.state = {
      long: 2.3522,
      lat: 48.8566,
      marked: false,
    };
  }

  zoomTo = (newLong, newLat) => {
    this.setState({
      long: newLong,
      lat: newLat,
      marked: true,
    });
  }

  render() {
    const { long, lat, marked } = this.state;
    return (
      <div>
        <FlatList zoomTo={this.zoomTo} />
        <div className="map-container">
          <FlatMap long={long} lat={lat} marked={marked} />
        </div>
      </div>
    );
  }
}

export default App;
