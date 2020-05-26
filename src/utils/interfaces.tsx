import React from 'react';

export interface IDisplayTime {
  fmtStr: string;
  time: moment.Moment;
  timezone: string;
}
export interface IDualConvertor {
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
  setTZ2: React.Dispatch<React.SetStateAction<string>>;
  time: moment.Moment;
  TZ1: string;
  TZ2: string;
}

export interface IFutureConversion {
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
  setTZ2: React.Dispatch<React.SetStateAction<string>>;
  time: moment.Moment;
  TZ1: string;
  TZ2: string;
}
export interface IFutureConverted {
  selectedTime: moment.Moment;
  TZ1: string;
  TZ2: string;
}

export interface IMoment {
  time: moment.Moment;
}

export interface IShowSavedTimezones {
  savedZones: string[];
  time: moment.Moment;
}

export interface ISimpleConvertor {
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
  time: moment.Moment;
  TZ1: string;
}

export interface ITimezoneInput {
  autofocus: boolean;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
  clearInput?: React.Dispatch<React.SetStateAction<moment.Moment | undefined>>;
  id: string;
  placeholder: string;
  TZ: string;
}
