import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/app';
import Flat from './components/flat';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Flat name="Bohemian and Chic in Paris"
    imageUrl="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg"
    price="90"
    priceCurrency="EUR"
     />,
    root
  );
}
