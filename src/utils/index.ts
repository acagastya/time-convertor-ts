import moment from "moment-timezone";

import { IDisplayTime, IGetAbbr } from "../utils/interfaces";

/**
 * @description clears the zones in localStorage
 */
function clearTimezones<never>() {
  localStorage.setItem("zones", "{}");
}

/**
 *
 * @param fmtStr {string} Formatting string (ex. 'HH:mm:ss MMMM DD, YYYY')
 * @param time {moment.Moment} Time to be formatted
 * @param timezone {string} Timezone to set
 * @returns {string} formatted time
 */
function displayTime({ fmtStr, time, timezone }: IDisplayTime) {
  return time.tz(timezone).format(fmtStr);
}

/**
 * @description Convert a string like `foo_bar_baz` to `foo bar baz`
 * @param {string} str
 */
function friendlyStr(str: string): string {
  return str.replace(/_/g, " ");
}

/**
 *
 * @description Obtain the abbreviation of a timezone
 * @param timezone {string} Time zone string
 * @param time {moment.Moment} moment object
 * @returns {string}
 */
function getAbbr({ timezone, time }: IGetAbbr): string {
  // @ts-ignore -- they most certainly won't be undefined
  return moment.tz.zone(timezone).abbr(time);
}

/**
 * @description Fetch list of saved time zones from the localStorage
 * @returns {string[] | []} Array of saved time zones
 */
function getSavedZones<never>(): string[] | [] {
  // query localStorage to get JSON as string
  const savedData: string = localStorage.getItem("zones") || "{}";
  // extract array
  const savedZones: string[] = JSON.parse(savedData).list || [];
  return savedZones;
}

/**
 * @description get yesterday's date as a moment object
 * @ref { https://flaviocopes.com/how-to-get-yesterday-date-javascript/ }
 * @returns {moment.Moment}
 */
function getYesterday<never>(): moment.Moment {
  const today = new Date();
  const yesterday = new Date();

  yesterday.setDate(today.getDate() - 1);
  return moment(yesterday);
}

/**
 * @description Removes one zone from localStorage
 * @param {string} zone zone to be removed from the localStorage
 */
function removeTimeZone(zone: string = ""): void {
  // get saved zones
  const savedZones = getSavedZones();
  // filter out
  const updatedZones = savedZones.filter((savedZone) => savedZone !== zone);
  // stringify JSON
  const newZonesStr = JSON.stringify({ list: updatedZones });
  // save to localStorage
  localStorage.setItem("zones", newZonesStr);
}

/**
 *
 * @description takes in an array of timezones and updates the localStorage
 * @param timezone {string[]} An array of timezones
 */
function saveTimezones(timezone: string[] | [] = []) {
  // get saved zones
  const savedZones = getSavedZones();
  // new array of sorted time zones
  const newZones = Array.from(new Set([...savedZones, ...timezone])).sort();
  // stringify JSON
  const newZonesStr = JSON.stringify({ list: newZones });
  // save to localStorage
  localStorage.setItem("zones", newZonesStr);
}

/**
 * @description Convert a string like `foo bar baz` to `foo_bar_baz`
 * @param {string} str
 */
function unfriendlyStr(str: string): string {
  return str.replace(/ /g, "_");
}

export {
  clearTimezones,
  displayTime,
  friendlyStr,
  getAbbr,
  getSavedZones,
  getYesterday,
  removeTimeZone,
  saveTimezones,
  unfriendlyStr,
};

const basePath = process.env.PUBLIC_URL;
const DEFAULT_TZ = "UTC";
const HM = "HH:mm";
const HMMDY = "HH:mm MMMM DD, YYYY";
const HMSDMY = "HH:mm:ss MMMM DD, YYYY";
const localTimezone = moment.tz.guess();
const MAX_DATE = "2038-01-18";
const timezoneList = moment.tz.names().sort();
const YEAR = new Date().getFullYear();
const YMD = "YYYY-MM-DD";

export {
  basePath,
  DEFAULT_TZ,
  HM,
  HMMDY,
  HMSDMY,
  localTimezone,
  MAX_DATE,
  timezoneList,
  YEAR,
  YMD,
};
