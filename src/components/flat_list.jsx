import React from 'react';
import Flat from './flat';
import flats from '../data/flats';

const FlatList = ({ zoomTo }) => {
  const flatElements = flats.map((flat) => {
    return (
      <Flat
        name={flat.name}
        imageUrl={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        key={flat.imageUrl}
        long={flat.lng}
        lat={flat.lat}
        zoomTo={zoomTo}
      />
    );
  });
  return (
    <div className="flat-list">
      {flatElements}
    </div>
  );
};

export default FlatList;
