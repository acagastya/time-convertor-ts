import React from "react";
import moment from "moment-timezone";

import TimezoneInput from "../comps/TimezoneInput";

import { HM, localTimezone, MAX_DATE, YMD } from "../../utils";

function CreateEvent() {
  const { protocol, host } = window.location;
  const url = `${protocol}//${host}/`;
  const now = moment(Date.now());
  const defaults = {
    date: now.format(YMD),
    stamp: now.unix(),
    time: now.format(HM),
  };
  const [fullurl, setFullurl] = React.useState<string>("");
  const [date, setDate] = React.useState<string>(defaults.date);
  const [time, setTime] = React.useState<string>(defaults.time);
  const [timezone, setTimezone] = React.useState<string>(localTimezone);
  let textArea: HTMLInputElement | null;

  function copyToClipboard(): void {
    const el = textArea;
    el?.select();
    document.execCommand("copy");
  }

  function generateLink(): void {
    const instance = moment.tz(`${date} ${time}`, timezone).unix();
    setFullurl(`${url}${instance}`);
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setDate(e.target.value);
    setFullurl("");
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTime(e.target.value);
    setFullurl("");
  }

  function handleTimezoneChange(tz: React.SetStateAction<string>): void {
    setTimezone(tz);
    setFullurl("");
  }

  return (
    <main className="container">
      <h1 className="mb-3 text-center">
        Select the date, time and timezone of your event.
      </h1>
      <label htmlFor="event-date">Event date</label>
      <input
        aria-describedby="event-date"
        className="form-control mb-4"
        id="event-date"
        max={MAX_DATE}
        name="event-date"
        onChange={handleDateChange}
        placeholder="Enter date"
        type="date"
        value={date}
      />
      <label htmlFor="event-time">Event time</label>
      <input
        aria-describedby="event-time"
        className="form-control mb-4"
        id="event-time"
        name="event-time"
        onChange={handleTimeChange}
        placeholder="Enter time"
        type="time"
        value={time}
      />
      <label htmlFor="event-timezone">Set timezone</label>
      <TimezoneInput
        autofocus={false}
        changeValue={handleTimezoneChange}
        id="event-timezone-input"
        placeholder="Time zone"
        TZ={timezone}
      />
      <h1 className="mt-5">Share link!</h1>
      <div className="input-group">
        <div className="input-group-prepend" onClick={generateLink}>
          <span className="input-group-text">Click to create link!</span>
        </div>
        <input
          className="form-control"
          id="event-url"
          onClick={copyToClipboard}
          readOnly={true}
          ref={(text) => (textArea = text)}
          style={{
            background: "white",
          }}
          type="text"
          value={fullurl}
        />
      </div>
    </main>
  );
}

export default CreateEvent;
