import moment from 'moment-timezone';

/**
 * @description Convert a string like `foo_bar_baz` to `foo bar baz`
 * @param {string} str 
 */
function friendlyStr(str: string): string {
  return str.replace(/_/g, ' ');
}

/**
 * @description Convert a string like `foo bar baz` to `foo_bar_baz`
 * @param {string} str
 */
function unfriendlyStr(str: string): string {
  return str.replace(/ /g, '_');
}

export {
  friendlyStr,
  unfriendlyStr
};

const DEFAULT_TZ = 'UTC';
const localTimezone = moment.tz.guess();
const timezoneList = moment.tz.names().sort();
const YEAR = new Date().getFullYear();

export {
  DEFAULT_TZ,
  localTimezone,
  timezoneList,
  YEAR
};