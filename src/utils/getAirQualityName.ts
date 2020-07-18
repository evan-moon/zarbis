import { AirQualityName } from 'src/constants';

export function getAirQualityName(aqi: number): AirQualityName {
  if (aqi < 51) {
    return AirQualityName.Good;
  } else if (aqi < 101) {
    return AirQualityName.Normal;
  } else if (aqi < 151) {
    return AirQualityName.Caution;
  } else if (aqi < 201) {
    return AirQualityName.Bad;
  } else if (aqi < 301) {
    return AirQualityName.VeryBad;
  } else if (aqi >= 301) {
    return AirQualityName.Danger;
  } else {
    return AirQualityName.Normal;
  }
}
