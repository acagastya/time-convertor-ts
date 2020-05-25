import React from 'react';

import TimezoneInput from '../comps/TimezoneInput';

import {
  clearTimezones,
  displayTime,
  saveTimezones,
  friendlyStr,
  localTimezone,
} from '../../utils';
import { HMSDMY } from '../../utils';
import { ISimpleConvertor } from '../../utils/interfaces';

function SimpleConvertor({ time, TZ1, setTZ1 }: ISimpleConvertor): JSX.Element {
  return (
    <main className="container">
      <h3 className="mb-5 text-center">
        Convert <em>current</em> time to other time zone.
      </h3>
      <div className="row mb-3" id="labels">
        <div className="col text-right" id="first-time-lbl-box">
          <div className="h4">{friendlyStr(localTimezone)} (Local time)</div>
        </div>
        <div className="col" id="second-time-lbl-box">
          <TimezoneInput
            autofocus={true}
            changeValue={setTZ1}
            id="second-time-lbl"
            placeholder="Time zone"
            TZ={TZ1}
          />
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="first-time-box">
          <h4 id="first-time">
            {displayTime({ fmtStr: HMSDMY, time, timezone: localTimezone })}
          </h4>
        </div>
        <div className="col" id="second-time-box">
          <h4 id="second-time">
            {displayTime({ fmtStr: HMSDMY, time, timezone: TZ1 })}
          </h4>
        </div>
      </div>
      <div className="text-right mt-5">
        <button
          className="btn btn-success mr-3"
          type="button"
          onClick={() => saveTimezones([TZ1])}
        >
          Save timezone
        </button>
        <button
          className="mdx btn btn-danger"
          type="button"
          onClick={clearTimezones}
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

export default SimpleConvertor;
