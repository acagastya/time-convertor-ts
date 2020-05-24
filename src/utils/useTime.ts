import { useState, useEffect } from 'react';
import moment from 'moment-timezone';


/**
 * @description A custom hook which returns the current time as a moment object.
 * @param none
 * @returns {moment.Moment} moment object containing current time.
 */
function useTime<never>(): moment.Moment {
  const [time, setTime] = useState(moment());

  function updateTime() {
    setTime(moment());
  }

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  });

  return time;
}

export default useTime;