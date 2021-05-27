import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Scoreboard from './components/Scoreboard';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div id='root'>
      <Router>
        <Switch>
          {' '}
          <Route exact path='/' component={Home} />
          <Route path='/scoreboard' component={Scoreboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
