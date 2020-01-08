import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Novel from './pages/Novel';
import Reeding from './pages/Reeding';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/novel">
            <Novel />
          </Route>
          <Route path="/reeding">
            <Reeding />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
