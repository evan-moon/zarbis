import { useState, useEffect, useCallback } from 'react';
import { useGeoLocation } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData, WeatherCodeTypeMap } from 'src/models/Weather';
import weatherCodes from 'src/assets/weather-codes.json';
import { useIntervalEffect } from './useIntervalEffect';
import { WEATHER_REFRESH_INTERVAL } from 'src/constants';

export function useCurrentWeather(): WeatherData | null {
  const [weather, setWeather] = useState<WeatherData | null>(null);
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
    setWeather({
      weather,
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      type: (weatherCodes as WeatherCodeTypeMap)[String(weather.id)],
    });
  }, [geoLocation]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  useIntervalEffect(() => {
    fetchWeatherData();
  }, WEATHER_REFRESH_INTERVAL);

  return weather != null ? weather : null;
}
