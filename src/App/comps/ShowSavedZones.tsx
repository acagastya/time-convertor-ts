import React from 'react';

import { displayTime, friendlyStr, removeTimeZone } from '../../utils';
import { HMSDMY } from '../../utils';

import { IShowSavedTimezones } from '../../utils/interfaces';

function ShowSavedZones({
  savedZones,
  time,
}: IShowSavedTimezones): JSX.Element {
  return (
    <>
      <h3 className="mt-5 mb-3">Saved time zones</h3>
      <ul className="list-group">
        {savedZones.map((zone) => (
          <li
            className="list-group-item list-group-item-action"
            key={zone}
            style={{ cursor: 'pointer' }}
          >
            <h4>{friendlyStr(zone)}</h4>
            <span>{displayTime({ fmtStr: HMSDMY, time, timezone: zone })}</span>
            <button
              className="btn btn-danger float-right"
              type="button"
              onClick={() => removeTimeZone(zone)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowSavedZones;
