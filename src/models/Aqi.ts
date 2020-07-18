export interface Attribution {
  url: string;
  name: string;
  logo: string;
}

export interface City {
  geo: number[];
  name: string;
  url: string;
}

interface PollutionValue {
  v: number;
}
export interface Iaqi {
  co: PollutionValue;
  h: PollutionValue;
  no2: PollutionValue;
  o3: PollutionValue;
  p: PollutionValue;
  pm10: PollutionValue;
  pm25: PollutionValue;
  r: PollutionValue;
  so2: PollutionValue;
  t: PollutionValue;
  w: PollutionValue;
  wd: PollutionValue;
}

export interface Time {
  s: string;
  tz: string;
  v: number;
}

export interface Debug {
  sync: string;
}

export interface AqiDataResponse {
  aqi: number;
  idx: number;
  attributions: Attribution[];
  city: City;
  dominentpol: string;
  iaqi: Iaqi;
  time: Time;
  debug: Debug;
}

export interface AqiData {
  aqi: number;
}
