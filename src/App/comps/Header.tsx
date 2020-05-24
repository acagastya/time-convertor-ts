import React from 'react';

function Header<never>(): JSX.Element {
  return (
    <header className="border-bottom page-header mt-3">
      <h1>time-convertor</h1>
    </header>
  );
}

export default Header;
