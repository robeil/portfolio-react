import React from "react";
import { Route, Switch } from 'react-router-dom';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index';
import Resume from './components/Resume/index';

function App() {
  return (
    <div>
    <Switch>
      <Route path='/' exact component={About} />
      <Route path='/about' exact component={About} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/portfolio' exact component={Portfolio} />
      <Route path='/resume' exact component={Resume} />
      </Switch>
    </div>
      
  );
}

export default App;
