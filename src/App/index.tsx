import React from 'react';

import CurrentConvertor from './pages/CurrentConvertor';

import Footer from './comps/Footer';
import Header from './comps/Header';

import { DEFAULT_TZ, localTimezone } from '../utils';

function App<never>(): JSX.Element {
  const [timezone1, setTimezone1] = React.useState(localTimezone);
  const [timezone2, setTimezone2] = React.useState(DEFAULT_TZ);
  return (
    <div className="container-fluid">
      <Header />
      <CurrentConvertor />
      <Footer />
    </div>
  );
}

export default App;
