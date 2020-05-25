import React from 'react';
import moment from 'moment-timezone';

import FutureConverted from '../comps/FutureConverted';
import TimezoneInput from '../comps/TimezoneInput';

import { displayTime, timezoneList } from '../../utils';
import { HM, MAX_DATE, YMD, localTimezone } from '../../utils';
import { IFutureConversion } from '../../utils/interfaces';
import ErrorAlert from '../comps/ErrorAlert';

function FutureConversion({
  time: now,
  setTZ1,
  setTZ2,
  TZ1,
  TZ2,
}: IFutureConversion): JSX.Element {
  const [date, setDate] = React.useState(
    displayTime({ fmtStr: YMD, time: now, timezone: localTimezone })
  );
  const [time, setTime] = React.useState(
    displayTime({ fmtStr: HM, time: now, timezone: localTimezone })
  );

  const [selectedTime, setSelectedTime] = React.useState<
    moment.Moment | undefined
  >();
  const [err, setErr] = React.useState<string>('');

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setDate(e.target.value);
    setSelectedTime(undefined);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    // 0. Reset Error and selected time
    setErr('');
    setSelectedTime(undefined);
    // 1. Validate selected date
    const selectedDate = moment(date);
    if (!selectedDate.isValid()) {
      setErr('Chosen date is not valid.');
      console.warn(err);
      return;
    }
    // 2. Check limit of selected date
    // 2.1 MAX allowed
    const epoch = moment(MAX_DATE, YMD);
    if (epoch.unix() - selectedDate.unix() < 0) {
      setErr('Chosen date is outside the maximum permissible limit.');
      console.warn(err);
      return;
    }
    // 2.2 MIN allowed
    const todayMoment = moment(now.format(YMD), YMD);
    const selectedMoment = moment(selectedDate.format(YMD), YMD);
    if (selectedMoment.unix() - todayMoment.unix() < 0) {
      setErr('Chosen date is in the past.');
      console.warn(err);
      return;
    }
    // 3. Validate chosen time
    const dateStr = selectedDate.format(YMD);
    const timeStr = time;
    const dateTimeStr = `${dateStr} ${timeStr}`;
    const dateTime = moment.tz(dateTimeStr, TZ1);
    if (!dateTime.isValid()) {
      setErr('Error occurred while parsing time.');
      console.warn(err);
      return;
    }
    // 4. validate chosen timezone
    if (timezoneList.indexOf(TZ1) < 0) {
      setErr('Selected timezone is invalid.');
      console.warn(err);
      return;
    }
    // 5. validate set timezone
    if (timezoneList.indexOf(TZ2) < 0) {
      setErr('Selected timezone to convert is invalid.');
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
              time: now,
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
            TZ={TZ1}
            id="choose-from-timezone"
            placeholder="Set timezone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="convert-to-timezone">Convert to timezone</label>
          <TimezoneInput
            autofocus={false}
            changeValue={setTZ2}
            clearInput={setSelectedTime}
            TZ={TZ2}
            id="convert-to-timezone"
            placeholder="Convert to timezone"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Convert
        </button>
        {err ? <ErrorAlert msg={err} /> : null}
        {selectedTime !== undefined ? (
          <FutureConverted selectedTime={selectedTime} TZ1={TZ1} TZ2={TZ2} />
        ) : null}
      </form>
    </div>
  );
}

export default FutureConversion;
