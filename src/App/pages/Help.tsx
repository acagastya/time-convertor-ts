import React from 'react';
import { Link } from 'react-router-dom';

import { getAbbr } from '../../utils';

import { basePath, localTimezone } from '../../utils';

import { IMoment } from '../../utils/interfaces';

function Help({ time }: IMoment): JSX.Element {
  return (
    <div className="container">
      <ol>
        <li>
          Use the <Link to={`${basePath}/`}>homepage</Link> to convert your{' '}
          <span className="font-weight-bold">current time</span> (
          {getAbbr({ time, timezone: localTimezone })}) to other timezone.
        </li>
        <li>
          Use the <Link to={`${basePath}/future`}>/future</Link> to convert a{' '}
          <span className="font-weight-bold">future date</span> between
          different timezones.
        </li>
        <li>
          Use the <Link to={`${basePath}/from-to`}>/from-to</Link> to convert{' '}
          <span className="font-weight-bold">current time</span> between
          different timezones.
        </li>
        <li>
          You can <span className="font-weight-bold">save</span> the converted
          timezones, by clicking the "Save" button.
        </li>
      </ol>
    </div>
  );
}

export default Help;
