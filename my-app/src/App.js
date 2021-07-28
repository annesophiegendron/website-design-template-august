import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';

// pagea
import { Homepage } from './pages/Homepage';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { News } from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route  path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
