import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/app';
import Flat from './components/flat';
import FlatList from './components/flat_list';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <FlatList />,
    root
  );
}
