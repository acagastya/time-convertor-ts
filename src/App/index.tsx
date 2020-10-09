import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CreateEvent from './pages/CreateEvent';
import DualConvertor from './pages/DualConvertor';
import FutureConversion from './pages/FutureConversion';
import Help from './pages/Help';
import SimpleConvertor from './pages/SimpleConvertor';
import UNIXTime from './pages/UNIXTime';

import Footer from './comps/Footer';
import Header from './comps/Header';

import { displayTime } from '../utils';
import { basePath, DEFAULT_TZ, HM, localTimezone, YMD } from '../utils';
import useTime from '../utils/useTime';

function App<never>(): JSX.Element {
  const now = useTime();
  const [timezone1, setTimezone1] = React.useState(DEFAULT_TZ);
  const [timezone2, setTimezone2] = React.useState(localTimezone);
  const [date, setDate] = React.useState(
    displayTime({ fmtStr: YMD, time: now, timezone: localTimezone })
  );
  const [time, setTime] = React.useState(
    displayTime({ fmtStr: HM, time: now, timezone: localTimezone })
  );

  return (
    <Router>
      <div
        className="container-fluid"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Header />
        <Switch>
          <Route
            path={`${basePath}/future`}
            render={() => (
              <FutureConversion
                date={date}
                setDate={setDate}
                setTime={setTime}
                setTZ1={setTimezone1}
                setTZ2={setTimezone2}
                time={time}
                TZ1={timezone1}
                TZ2={timezone2}
              />
            )}
          />
          <Route path={`${basePath}/help`} render={() => <Help time={now} />} />
          <Route
            path={`${basePath}/from-to`}
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
          <Route path={`${basePath}/create`} render={() => <CreateEvent />} />
          <Route path={`${basePath}/([0-9]+)`} render={() => <UNIXTime />} />
          <Route
            path={`${basePath}/`}
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
