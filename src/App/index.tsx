import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import DualConvertor from './pages/DualConvertor';
import FutureConversion from './pages/FutureConversion';
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
    <Router>
      <div
        className="container-fluid"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Header />
        <Switch>
          <Route
            path="/future"
            render={() => (
              <FutureConversion
                time={now}
                setTZ1={setTimezone1}
                setTZ2={setTimezone2}
                TZ1={timezone1}
                TZ2={timezone2}
              />
            )}
          />
          <Route path="/help" render={() => <Help time={now} />} />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
