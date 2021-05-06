import React, { Component } from 'react';
import Home from './components/Home';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={ Home } />
      </div>
    );
  }
}

export default App;
