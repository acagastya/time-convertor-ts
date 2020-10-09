import React from 'react';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

import { basePath, localTimezone } from '../../utils';
import TimezoneInput from '../comps/TimezoneInput';

function UNIXTime(): JSX.Element {
  const timestamp = +window.location.pathname.replace('/', '') * 1000;

  const [TZ, setTZ] = React.useState<string>(localTimezone);

  const urlTime = moment.tz(timestamp, TZ);
  const rightNow = Date.now();
  const isWas = urlTime.valueOf() >= rightNow ? 'is' : 'was';

  const [instance, setInstance] = React.useState<moment.Moment>(urlTime);

  const [displayTime, setDisplayTime] = React.useState<string>(
    instance.format('HH:mm MMM DD, YYYY Z (z)')
  );

  const [timezone, setTimezone] = React.useState<string>(
    instance.format('Z (z)')
  );

  function handleClick() {
    setInstance(moment.tz(timestamp, TZ));
    setDisplayTime(instance.format('HH:mm MMM DD, YYYY Z (z)'));
    setTimezone(instance.format('Z (z)'));
  }

  function handleTimezoneChange(tz: React.SetStateAction<string>) {
    setTZ(tz);
    setInstance(moment.tz(timestamp, '' + tz));
  }

  return (
    <main className="container">
      <div className="text-center">
        <h3>That {isWas}:</h3>
        <h1 className="mb-5 mt-3">{displayTime}</h1>
        <h5>Not {timezone}?</h5>
        <TimezoneInput
          autofocus={false}
          changeValue={handleTimezoneChange}
          id="event-time-mismatch"
          placeholder="Time zone"
          TZ={TZ}
        />
        <button className="btn btn-primary mb-5 mt-3" onClick={handleClick}>
          Change
        </button>
        <p className="mb-5 mt-5"></p>
        <Link
          className="btn btn-info mt-5"
          role="button"
          to={`${basePath}/create`}
        >
          Schedule a new event
        </Link>
      </div>
    </main>
  );
}

export default UNIXTime;
