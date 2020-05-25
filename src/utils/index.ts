import moment from 'moment-timezone';

/**
 * @description clears the localStorage
 */
function clearTimezones() {
  localStorage.clear()
}
/**
 * 
 * @param fmtStr {string} Formatting string (ex. 'HH:mm:ss MMMM DD, YYYY')
 * @param time {moment.Moment} Time to be formatted
 * @param timezone {string} Timezone to set
 * @returns {string} formatted time
 */
function displayTime({ fmtStr, time, timezone }: { fmtStr: string; time: moment.Moment; timezone: string }) {
  return time.tz(timezone).format(fmtStr);
}
/**
 * @description Convert a string like `foo_bar_baz` to `foo bar baz`
 * @param {string} str 
 */
function friendlyStr(str: string): string {
  return str.replace(/_/g, ' ');
}

/**
 * 
 * @param timezone {string[]} An array of timezones
 * @description takes in an array of timezones and updates the localStorage
 */
function saveTimezones(timezone: string[] | [] = []) {
  const savedData: string = localStorage.getItem('zones') || '{}';
  const savedZones: string[] = JSON.parse(savedData).list || [];
  const newZones = Array.from(new Set([...savedZones, ...timezone])).sort();
  const newZonesStr = JSON.stringify({ list: newZones });
  localStorage.setItem('zones', newZonesStr);
}

/**
 * @description Convert a string like `foo bar baz` to `foo_bar_baz`
 * @param {string} str
 */
function unfriendlyStr(str: string): string {
  return str.replace(/ /g, '_');
}

export {
  clearTimezones,
  displayTime,
  friendlyStr,
  saveTimezones,
  unfriendlyStr
};

const DEFAULT_TZ = 'UTC';
const HMSDMY = 'HH:mm:ss MMMM, DD, YYYY';
const localTimezone = moment.tz.guess();
const timezoneList = moment.tz.names().sort();
const YEAR = new Date().getFullYear();

export {
  DEFAULT_TZ,
  HMSDMY,
  localTimezone,
  timezoneList,
  YEAR
};