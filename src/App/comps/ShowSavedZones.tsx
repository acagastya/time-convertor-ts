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
            <div className="row">
              <div className="col">
                <span className="h4">{friendlyStr(zone)}</span>
                <br />
                <span>
                  {displayTime({ fmtStr: HMSDMY, time, timezone: zone })}
                </span>
              </div>
              <div className="justify-content-center align-self-center col">
                <button
                  className="btn btn-danger float-right"
                  onClick={() => removeTimeZone(zone)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowSavedZones;
