import { useState, useEffect } from 'react';
import { useGeoLocation } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData } from 'src/interfaces/OpenWeather';

export function useWeather (): WeatherData | null {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const geoLocation = useGeoLocation();

  useEffect(() => {
    if (geoLocation) {
      APIOpenWeather.fetchWeatherByGeoLocation({
        lat: geoLocation.coords.latitude,
        lon: geoLocation.coords.longitude
      }).then(res => {
        setWeather(res);
      });
    }
  }, [geoLocation]);

  return weather ? weather : null;
}
