//The project's archetecture:
//--Pages are located at layout directory and consist of components
//--Components are located at Components directory
//--Styling is located at Sass directory and imported in index. It does not fully correspond to components
//--Plural and singular style names are located within the same file. So are the small components (e.g. buttons) and animations

import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Admin from './layout/Admin';
import Classes from './layout/Classes';
import Loader from './layout/Loader';
import Main from './layout/Main';
import Menu from './layout/Menu';
import ModalForm from './layout/ModalForm';
import ModalThanks from './layout/ModalThanks';
import Teachers from './layout/Teachers';
import Prising from './layout/Prising';
import NotFound from './layout/NotFound';
import News from './layout/News';
import Studio from './layout/Studio';

function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    })
  });

  const location = useLocation();

  return (
    <div className="container">
        <AnimatePresence exitBeforeEnter>
          {!isLoaded && <Loader />}
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={ Main } />
            <Route path="/navigation" exact component={ Menu } />
            <Route path="/thanks" exact component={ ModalThanks } />
            <Route path="/form" exact component={ ModalForm } />
            <Route path="/teachers" exact component={ Teachers } />
            <Route path="/prising" exact component={ Prising } />
            <Route path="/classes" exact component={ Classes } />
            <Route path="/studio" exact component={ Studio } />
            <Route path="/news" exact component={ News } />
            <Route path="/admin" exact component={ Admin } />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
