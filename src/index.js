import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/home.js';
import Product from './views/Product.js';
import Sample2 from './views/sample2.js';
import Service from './views/Service.js';
import { addInitListener } from '@kyma-project/luigi-client';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    addInitListener(() => {
      console.log('Luigi Client initialized.');
    });
  }
  render() {
    return (
      <BrowserRouter basename={`sampleapp.html#`}>
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/sample2" component={Sample2} />
        <Route path="/service" component={Service} />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
