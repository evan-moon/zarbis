export const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export const AQI_API_KEY = process.env.REACT_APP_AQI_API_KEY;

export enum Position {
  Top = 'TOP',
  Bottom = 'Bottom',
  Left = 'LEFT',
  Right = 'RIGHT',
  Center = 'CENTER',
};

export enum TemperatureUnit {
  Celsius = 'CELSIUS',
  Fahrenheit = 'FAHRENHEIT',
  Kelvin = 'KELVIN',
};

export enum AirQualityName {
  Good = 'GOOD',
  Normal = 'NORMAL',
  Caution = 'CAUTION',
  Bad = 'BAD',
  VeryBad = 'VERY_BAD',
  Danger = 'DANGER',
}
