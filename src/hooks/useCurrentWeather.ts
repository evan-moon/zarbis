import { useEffect, useCallback } from 'react';
import { useGeoLocation, useStateWithLocalCache } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData, WeatherCodeTypeMap } from 'src/models/Weather';
import weatherCodes from 'src/assets/weather-codes.json';
import { useIntervalEffect } from './useIntervalEffect';
import { WEATHER_REFRESH_INTERVAL, CURRENT_WEATHER_CACHE_EXPIRY as expiry } from 'src/constants';

const CURRENT_WEATHER_STORAGE_KEY = 'current_weather';
export function useCurrentWeather(): WeatherData | null {
  const [weather, setWeather] = useStateWithLocalCache<WeatherData | null>(null, CURRENT_WEATHER_STORAGE_KEY, expiry);
  const geoLocation = useGeoLocation();

  const fetchWeatherData = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await APIOpenWeather.fetchCurrentWeatherByGeoLocation({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });
    const weather = response.weather[0] ?? {};
    const data = {
      weather,
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      type: (weatherCodes as WeatherCodeTypeMap)[String(weather.id)],
    };
    setWeather(data);
  }, [geoLocation, setWeather]);

  useEffect(() => {
    if (weather === null) {
      fetchWeatherData();
    }
  }, [fetchWeatherData, weather]);

  useIntervalEffect(() => {
    fetchWeatherData();
  }, WEATHER_REFRESH_INTERVAL);

  return weather != null ? weather : null;
}
