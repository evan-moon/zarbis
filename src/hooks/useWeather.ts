import { useState, useEffect } from 'react';
import { useGeolocation } from './useGeolocation';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData } from 'src/interfaces/OpenWeather';

export function useWeather (): WeatherData | null {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const geolocation = useGeolocation();

  useEffect(() => {
    if (geolocation) {
      APIOpenWeather.fetchWeatherByGeoLocation({
        lat: geolocation.coords.latitude,
        lon: geolocation.coords.longitude
      }).then(res => {
        setWeather(res);
      });
    }
  }, [geolocation]);

  return weather ? weather : null;
}
