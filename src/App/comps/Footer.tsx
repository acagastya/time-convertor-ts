import React from 'react';

import { YEAR } from '../../utils';

function Footer<never>(): JSX.Element {
  return (
    <footer
      className="border-top mt-5 page-footer"
      style={{
        bottom: 0,
        paddingTop: '1rem',
      }}
    >
      <div className="text-center">
        <p>
          Copyright &copy; {YEAR}{' '}
          <a
            href="https://en.wikinews.org/wiki/User:Acagastya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agastya
          </a>
          . This project is licensed under{' '}
          <a
            href="https://opensource.org/licenses/BSD-3-Clause"
            target="_blank"
            rel="noopener noreferrer"
          >
            BSD-3-Clause license
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
