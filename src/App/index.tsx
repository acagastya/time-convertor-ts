import React from 'react';

import DualConvertor from './pages/DualConvertor';
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
      <DualConvertor
        time={now}
        TZ1={timezone2}
        TZ2={timezone1}
        setTZ1={setTimezone2}
        setTZ2={setTimezone1}
      />
      {/* <SimpleConvertor time={now} TZ1={timezone1} setTZ1={setTimezone1} /> */}
      <Footer />
    </div>
  );
}

export default App;
