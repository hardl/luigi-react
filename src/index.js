import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES, ROUTE_BASE } from './common/routes.js';
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
      <Router basename={ROUTE_BASE}>
          {ROUTES.map(({ path, view, exact }) => (
            <Route exact={exact} key={path} path={path} component={view} />
          ))}
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
