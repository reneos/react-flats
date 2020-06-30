import React, { Component } from 'react';
import FlatList from './flat_list';
import FlatMap from './flat_map';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <FlatList />
        <div className="map-container">
          <FlatMap />
        </div>
      </div>
    );
  }
}

export default App;
