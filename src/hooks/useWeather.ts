import { useState, useEffect } from 'react';
import { useGeolocation } from './useGeolocation';
import APIOpenWeather from 'src/api/APIOpenWeather';

export function useWeather () {
  const [weather, setWeather] = useState<any>(null);
  const geolocation = useGeolocation();

  useEffect(() => {
    if (geolocation) {
      APIOpenWeather.fetchWeatherByGeoLocation({
        lat: geolocation.coords.latitude,
        lon: geolocation.coords.longitude
      }).then(res => {
        setWeather(res.data);
      });
    }
  }, [geolocation]);

  return weather ? weather : null;
}
