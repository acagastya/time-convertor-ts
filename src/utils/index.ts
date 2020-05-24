import moment from 'moment-timezone';

/**
 * @description Convert a string like `foo_bar_baz` to `foo bar baz`
 * @param {string} str 
 */
function friendlyStr(str: string): string {
  return str.replace(/_/g, ' ');
}

export {
  friendlyStr
};

const DEFAULT_TZ = 'UTC';
const localTimezone = moment.tz.guess();
const YEAR = new Date().getFullYear();

export {
  DEFAULT_TZ,
  localTimezone,
  YEAR
};