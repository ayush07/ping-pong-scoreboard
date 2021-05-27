import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Scoreboard from './components/Scoreboard';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div id='root'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/scoreboard' component={Scoreboard} />
      </Router>
    </div>
  );
}

export default App;
