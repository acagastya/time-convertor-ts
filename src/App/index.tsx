import React from 'react';

import CurrentConvertor from './pages/CurrentConvertor';
import SimpleConvertor from './pages/SimpleConvertor';

import Footer from './comps/Footer';
import Header from './comps/Header';

import { DEFAULT_TZ, localTimezone } from '../utils';
import useTime from '../utils/useTime';

function App<never>(): JSX.Element {
  const now = useTime();
  const [timezone1, setTimezone1] = React.useState(DEFAULT_TZ);

  return (
    <div className="container-fluid">
      <Header />
      {/* <CurrentConvertor
        time={now}
        TZ1={timezone1}
        TZ2={timezone2}
        setTZ1={setTimezone1}
        setTZ2={setTimezone2}
      /> */}
      <SimpleConvertor time={now} TZ1={timezone1} setTZ1={setTimezone1} />
      <Footer />
    </div>
  );
}

export default App;
