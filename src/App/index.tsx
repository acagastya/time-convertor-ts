import React from 'react';

import CurrentConvertor from './pages/CurrentConvertor';

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
      <CurrentConvertor
        time={now}
        TZ1={timezone1}
        TZ2={timezone2}
        setTZ1={setTimezone1}
        setTZ2={setTimezone2}
      />
      <Footer />
    </div>
  );
}

export default App;
