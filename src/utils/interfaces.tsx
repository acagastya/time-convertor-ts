import React from 'react';

export interface ICurrentConvertor {
  time: moment.Moment;
  TZ1: string;
  TZ2: string;
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
  setTZ2: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISimpleConvertor {
  time: moment.Moment;
  TZ1: string;
  setTZ1: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITimezoneInput {
  autofocus: boolean;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  placeholder: string;
  TZ: string;
}
