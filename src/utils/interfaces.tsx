import React from 'react';

export interface IDualConvertor {
  time: moment.Moment;
  TZ1: string;
  TZ2: string;
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
  setTZ2: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDisplayTime {
  fmtStr: string;
  time: moment.Moment;
  timezone: string;
}

export interface IMoment {
  time: moment.Moment;
}

export interface ISavedTimezones {
  time: moment.Moment;
}

export interface IShowSavedTimezones {
  savedZones: string[];
  time: moment.Moment;
}

export interface ISimpleConvertor {
  time: moment.Moment;
  TZ1: string;
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITimezoneInput {
  autofocus: boolean;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
  clearInput?: Function;
  id: string;
  placeholder: string;
  TZ: string;
}
