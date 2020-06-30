import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    const { name, imageUrl, price, priceCurrency } = this.props;
    const backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.2)),
        url(${imageUrl})`
    };
    return (
      <div className="card" style={backgroundStyle}>
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
