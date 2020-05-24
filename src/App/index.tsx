import React from 'react';

import Footer from './comps/Footer';
import Header from './comps/Header';

function App<never>(): JSX.Element {
  return (
    <div className="container-fluid">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
