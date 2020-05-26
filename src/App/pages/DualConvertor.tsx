import React from 'react';

import SavedTimezones from '../comps/SavedTimezones';
import TimezoneInput from '../comps/TimezoneInput';

import {
  clearTimezones,
  displayTime,
  getSavedZones,
  saveTimezones,
} from '../../utils';

import { HMSDMY } from '../../utils';

import { IDualConvertor } from '../../utils/interfaces';

function DualConvertor({
  time,
  TZ1,
  TZ2,
  setTZ1,
  setTZ2,
}: IDualConvertor): JSX.Element {
  return (
    <main className="container">
      <h3 className="mb-5 text-center">
        Convert <em>current</em> time across time zones.
      </h3>
      <div className="mb-3 row" id="labels">
        <div className="col text-right" id="first-time-lbl-box">
          <TimezoneInput
            autofocus={true}
            changeValue={setTZ1}
            id="first-time-lbl"
            placeholder="Time zone"
            TZ={TZ1}
          />
        </div>
        <div className="col" id="second-time-lbl-box">
          <TimezoneInput
            autofocus={false}
            changeValue={setTZ2}
            id="second-time-lbl"
            placeholder="Time zone"
            TZ={TZ2}
          />
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="first-time-box">
          <h4 id="first-time">
            {displayTime({ fmtStr: HMSDMY, time, timezone: TZ1 })}
          </h4>
        </div>
        <div className="col" id="second-time-box">
          <h4 id="second-time">
            {displayTime({ fmtStr: HMSDMY, time, timezone: TZ2 })}
          </h4>
        </div>
      </div>
      <div className="text-right mt-5">
        <button
          className="btn btn-success mr-3"
          type="button"
          onClick={() => saveTimezones([TZ1, TZ2])}
        >
          Save timezones
        </button>
        <button
          className="btn btn-danger"
          disabled={getSavedZones().length === 0}
          type="button"
          onClick={clearTimezones}
        >
          Clear All
        </button>
      </div>
      <SavedTimezones time={time} />
    </main>
  );
}

export default DualConvertor;
