import React from "react";
import moment from "moment-timezone";

import ErrorAlert from "../comps/ErrorAlert";
import FutureConverted from "../comps/FutureConverted";
import SavedFuture from "../comps/SavedFuture";
import TimezoneInput from "../comps/TimezoneInput";

import { displayTime, getYesterday, timezoneList } from "../../utils";
import { MAX_DATE, YMD, localTimezone } from "../../utils";

import { IFutureConversion } from "../../utils/interfaces";

function FutureConversion({
  date,
  setDate,
  setTime,
  setTZ1,
  setTZ2,
  time,
  // now, // aliased because [time, setTime] hook
  TZ1,
  TZ2,
}: IFutureConversion): JSX.Element {
  const [selectedTime, setSelectedTime] = React.useState<
    moment.Moment | undefined
  >(undefined);
  const [err, setErr] = React.useState<string>("");

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setDate(e.target.value);
    setSelectedTime(undefined);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    // 0. Reset Error and selected time
    setErr("");
    setSelectedTime(undefined);
    // 1. Validate selected date
    const selectedDate = moment(date);
    if (!selectedDate.isValid()) {
      setErr("Chosen date is not valid.");
      console.warn(err);
      return;
    }
    // 2. Check limit of selected date
    // 2.1 MAX allowed
    const epoch = moment(MAX_DATE, YMD);
    if (epoch.unix() - selectedDate.unix() < 0) {
      setErr("Chosen date is outside the maximum permissible limit.");
      console.warn(err);
      return;
    }
    // 2.2 MIN allowed -- yesterday
    const yDayMoment = moment(yesterday.format(YMD), YMD);
    const selectedMoment = moment(selectedDate.format(YMD), YMD);
    if (selectedMoment.unix() - yDayMoment.unix() < 0) {
      setErr("Chosen date is in the past.");
      console.warn(err);
      return;
    }
    // 3. Validate chosen time
    const dateStr = selectedDate.format(YMD);
    const timeStr = time;
    const dateTimeStr = `${dateStr} ${timeStr}`;
    const dateTime = moment.tz(dateTimeStr, TZ1);
    if (!dateTime.isValid()) {
      setErr("Error occurred while parsing time.");
      console.warn(err);
      return;
    }
    // 4. validate chosen timezone
    if (timezoneList.indexOf(TZ1) < 0) {
      setErr("Selected timezone is invalid.");
      console.warn(err);
      return;
    }
    // 5. validate set timezone
    if (timezoneList.indexOf(TZ2) < 0) {
      setErr("Selected timezone to convert is invalid.");
      console.warn(err);
      return;
    }
    // 6. convert time
    setSelectedTime(dateTime);
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTime(e.target.value);
    setSelectedTime(undefined);
  }

  const yesterday = getYesterday();

  return (
    <div className="container">
      <form autoComplete="false" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="choose-date">Choose date</label>
          <input
            aria-describedby="choose-date"
            className="form-control"
            id="chosen-date"
            max={MAX_DATE}
            min={displayTime({
              fmtStr: YMD,
              time: yesterday,
              timezone: localTimezone,
            })}
            name="choose-date"
            onChange={handleDateChange}
            placeholder="Enter date"
            type="date"
            value={date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="choose-time">Choose time</label>
          <input
            aria-describedby="choose-time"
            className="form-control"
            id="choose-time"
            name="choose-time"
            onChange={handleTimeChange}
            placeholder="Enter time"
            type="time"
            value={time}
          />
        </div>
        <div className="form-group">
          <label htmlFor="choose-from-timezone">Set timezone</label>
          <TimezoneInput
            autofocus={false}
            changeValue={setTZ1}
            clearInput={setSelectedTime}
            id="choose-from-timezone"
            placeholder="Set timezone"
            TZ={TZ1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="convert-to-timezone">Convert to timezone</label>
          <TimezoneInput
            autofocus={false}
            changeValue={setTZ2}
            clearInput={setSelectedTime}
            id="convert-to-timezone"
            placeholder="Convert to timezone"
            TZ={TZ2}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Convert
        </button>
        {err ? <ErrorAlert msg={err} /> : null}
        {selectedTime !== undefined ? (
          <FutureConverted selectedTime={selectedTime} TZ1={TZ1} TZ2={TZ2} />
        ) : null}
      </form>
      <SavedFuture selectedTime={selectedTime} />
    </div>
  );
}

export default FutureConversion;
