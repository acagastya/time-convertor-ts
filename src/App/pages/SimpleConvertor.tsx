import React from "react";

import SavedTimezones from "../comps/SavedTimezones";
import TimezoneInput from "../comps/TimezoneInput";

import {
  clearTimezones,
  displayTime,
  friendlyStr,
  getSavedZones,
  localTimezone,
  saveTimezones,
} from "../../utils";

import { HMSDMY } from "../../utils";

import { ISimpleConvertor } from "../../utils/interfaces";

function SimpleConvertor({ setTZ1, time, TZ1 }: ISimpleConvertor): JSX.Element {
  return (
    <main className="container">
      <h1 className="mb-5 text-center">
        Convert <em>current</em> time to other time zone.
      </h1>
      <div className="mb-3 row" id="labels">
        <div
          className="col text-right"
          id="first-time-lbl-box"
          style={{ cursor: "not-allowed" }}
        >
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
          onClick={() => saveTimezones([TZ1])}
          type="button"
        >
          Save timezone
        </button>
        <button
          className="btn btn-danger"
          disabled={getSavedZones().length === 0}
          onClick={clearTimezones}
          type="button"
        >
          Clear All
        </button>
      </div>
      <SavedTimezones time={time} />
    </main>
  );
}

export default SimpleConvertor;
