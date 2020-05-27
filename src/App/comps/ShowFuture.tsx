import React from 'react';
import moment from 'moment-timezone';

import { displayTime, friendlyStr, removeTimeZone } from '../../utils';
import { HMMDY } from '../../utils';

function ShowFuture({
  selectedTime,
  zones,
}: {
  selectedTime: moment.Moment;
  zones: string[];
}): JSX.Element {
  return (
    <>
      <h3 className="mt-5 mb-3">In other time zones...</h3>
      <ul className="list-group">
        {zones.map((zone) => (
          <li
            className="list-group-item list-group-item-action"
            key={zone}
            style={{ cursor: 'pointer' }}
          >
            <h4>{friendlyStr(zone)}</h4>
            <span>
              {displayTime({
                fmtStr: HMMDY,
                time: selectedTime,
                timezone: zone,
              })}
            </span>
            <button
              className="btn btn-danger float-right"
              onClick={() => removeTimeZone(zone)}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowFuture;
