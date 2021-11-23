import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home from './Pages/home';
import Atelier from './Pages/atelier';
import Portfolio from './Pages/portfolio';
import Jobs from './Pages/jobs';
import Media from './Pages/media';
import Contacts from './Pages/contacts';
import './styles/applications.scss';
import pt from "./locales/pt.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
      en: en,
      pt: pt,
  },
  fallbackLng: "en",
  debug: true,
});

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
