import { TemperatureUnit } from 'src/constants';

export function convertTemperature (temp: number, unit: TemperatureUnit) {
  if (unit === TemperatureUnit.Celsius) {
    return Math.round(temp - 273.15);
  }
  else if (unit === TemperatureUnit.Fahrenheit) {
    return Math.round((temp - 273.15) * (9 / 5) + 32);
  }
  else {
    return temp;
  }
}
