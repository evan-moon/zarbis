export const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export const AQI_API_KEY = process.env.REACT_APP_AQI_API_KEY;

export const WEATHER_REFRESH_INTERVAL = 1000 * 60 * 60; // ms
export const CURRENT_WEATHER_CACHE_EXPIRY = 60 * 30; // s
export const AQI_CACHE_EXPIRY = 60 * 30; // s

export enum Position {
  Top = 'TOP',
  Bottom = 'Bottom',
  Left = 'LEFT',
  Right = 'RIGHT',
  Center = 'CENTER',
}

export enum TemperatureUnit {
  Celsius = 'CELSIUS',
  Fahrenheit = 'FAHRENHEIT',
  Kelvin = 'KELVIN',
}

export enum AirQualityName {
  Good = 'GOOD',
  Normal = 'NORMAL',
  Caution = 'CAUTION',
  Bad = 'BAD',
  VeryBad = 'VERY_BAD',
  Danger = 'DANGER',
}
