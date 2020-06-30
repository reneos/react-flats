import React, { Component } from 'react';
import Flat from './flat';
import flats from '../data/flats';

class FlatList extends Component {

  render() {
    const flatElements = flats.map((flat) => {
      return (<Flat
        name={flat.name}
        imageUrl={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
      />);
    });
    return (
      <div className="flat-list">
        {flatElements}
      </div>
    );
  }

}

export default FlatList;
