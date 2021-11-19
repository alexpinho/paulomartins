import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/home';
import Atelier from './screens/Atelier/atelier';
import Portfolio from './screens/Portfolio/portfolio';
import Jobs from './screens/Jobs/jobs';
import Media from './screens/Media/media';
import Contacts from './screens/Contacts/contacts';
import './styles/base.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/atelier' component={Atelier} exact />
        <Route path='/portfolio' component={Portfolio} exact />
        <Route path='/jobs' component={Jobs} exact />
        <Route path='/media' component={Media} exact />
        <Route path='/contacts' component={Contacts} exact />
      </Switch>
    </Router>
  );
}

export default App;
