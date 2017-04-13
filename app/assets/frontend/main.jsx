import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import Follow from './components/Follow';

import { Link, Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router>
        <App>
          <Route path="/" component={Index} />
          <Route path="/follow" component={Follow} />
        </App>
      </Router>
      , reactNode);
  }
};

$(documentReady);
