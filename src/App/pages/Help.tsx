import React from 'react';
import { Link } from 'react-router-dom';

import { IMoment } from '../../utils/interfaces';

import { getAbbr } from '../../utils';
import { localTimezone } from '../../utils';

function Help({ time }: IMoment): JSX.Element {
  return (
    <div className="container">
      <ol>
        <li>
          Use the <Link to="/">homepage</Link> to convert your{' '}
          <span className="font-weight-bold">current time</span> (
          {getAbbr({ time, timezone: localTimezone })}) to other timezone.
        </li>
        <li>
          Use the <Link to="/future">/future</Link> to convert a{' '}
          <span className="font-weight-bold">future date</span> between
          different timezones.
        </li>
        <li>
          Use the <Link to="/from-to">/from-to</Link> to convert{' '}
          <span className="font-weight-bold">current time</span> between
          different timezones.
        </li>
        <li>
          You can <span className="font-weight-bold">save</span> the converted
          timezones, by clicking the "Save" button.
          <ul className="list">
            <li>
              An ascending order list of converted time zones appear at the
              bottom.
            </li>
            <li>
              If you wish to clear all the saved time zones, press "Clear All".
            </li>
            <li>
              If you wish to delete an individual timezone, you can delete from
              the list by.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Help;
