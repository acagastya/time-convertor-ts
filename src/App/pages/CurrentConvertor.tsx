import React from 'react';
import moment from 'moment-timezone';

import useTime from '../../utils/useTime';
import { DEFAULT_TZ, friendlyStr } from '../../utils';

function CurrentConvertor(): JSX.Element {
  const [TZ, setTZ] = React.useState('UTC');
  const localTZ = moment.tz.guess().replace(/_/g, ' ');
  const nowMoment = useTime();
  const timezoneList = moment.tz.names();
  return (
    <>
      <div className="row mb-3" id="labels">
        <div className="col text-right" id="local-time-lbl-box">
          <h1 id="local-time-lbl">Local time ({localTZ})</h1>
        </div>
        <div className="col" id="converted-time-lbl-box">
          <h1 id="converted-time-lbl">
            <form autoComplete="off">
              <div className="autocomplete">
                <input
                  autoComplete="false"
                  className="border-0"
                  id="myInput"
                  name="myTZ"
                  type="text"
                  placeholder="Time Zone"
                  defaultValue={friendlyStr(
                    nowMoment.tz(TZ).tz() || DEFAULT_TZ
                  )}
                />
              </div>
            </form>
          </h1>
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="local-time-box">
          <h4 id="local-time">
            {nowMoment.tz(localTZ).format('HH:mm:ss MMM DD, YYYY')}
          </h4>
        </div>
        <div className="col" id="converted-time-box">
          <h4 id="converted-time">
            {nowMoment.tz(TZ).format('HH:mm:ss MMM DD, YYYY')}
          </h4>
        </div>
      </div>
    </>
  );
}

export default CurrentConvertor;
