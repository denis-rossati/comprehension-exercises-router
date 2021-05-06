import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import  About from './components/About';
import Users from './components/Users';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Route exact path='/' component={ App } />
      <Route path='/about' component={ About } />
      <Route path='/users' component={ Users } />
      <Link to='/'> Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/users'> Users </Link>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
