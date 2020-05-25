import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import DualConvertor from './pages/DualConvertor';
import Help from './pages/Help';
import SimpleConvertor from './pages/SimpleConvertor';

import Footer from './comps/Footer';
import Header from './comps/Header';

import { DEFAULT_TZ, localTimezone } from '../utils';
import useTime from '../utils/useTime';

function App<never>(): JSX.Element {
  const now = useTime();
  const [timezone1, setTimezone1] = React.useState(DEFAULT_TZ);
  const [timezone2, setTimezone2] = React.useState(localTimezone);

  return (
    <div className="container-fluid">
      <Header />
      <Router>
        <Switch>
          <Route
            path="/from-to"
            render={() => (
              <DualConvertor
                setTZ1={setTimezone2}
                setTZ2={setTimezone1}
                time={now}
                TZ1={timezone2}
                TZ2={timezone1}
              />
            )}
          />
          <Route component={Help} path="/help" />
          <Route
            path="/"
            render={() => (
              <SimpleConvertor
                setTZ1={setTimezone1}
                time={now}
                TZ1={timezone1}
              />
            )}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
