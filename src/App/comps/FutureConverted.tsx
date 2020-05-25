import React from 'react';
import moment from 'moment-timezone';

import { displayTime, friendlyStr, getAbbr } from '../../utils';
import { HMMDY, HMSDMY } from '../../utils';
import { IFutureConverted } from '../../utils/interfaces';

function FutureConverted({
  selectedTime,
  TZ1,
  TZ2,
}: IFutureConverted): JSX.Element {
  const chosenTime = selectedTime;
  const convertedTime = selectedTime.clone().tz(TZ2);
  const fromLbl = getAbbr({ timezone: TZ1, time: moment(chosenTime, HMSDMY) });
  const toLbl = getAbbr({ timezone: TZ2, time: moment(convertedTime, HMSDMY) });
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <h1>{friendlyStr(TZ1)}</h1>
        </div>
        <div className="col">
          <h1>{friendlyStr(TZ2)}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {displayTime({ fmtStr: HMMDY, time: chosenTime, timezone: TZ1 })} (
          {fromLbl})
        </div>
        <div className="col">
          {displayTime({ fmtStr: HMMDY, time: convertedTime, timezone: TZ2 })} (
          {toLbl})
        </div>
      </div>
    </div>
  );
}

export default FutureConverted;
