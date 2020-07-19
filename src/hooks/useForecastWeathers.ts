import { useEffect, useCallback } from 'react';
import { useGeoLocation, useStateWithLocalCache } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData } from 'src/models/Weather';
import { FORECAST_WEATHERS_CACHE_EXPIRY as expiry, WEATHER_REFRESH_INTERVAL } from 'src/constants';
import { useIntervalEffect } from './useIntervalEffect';

const FORECAST_WEATHERS_STORAGE_KEY = 'forecast_weathers';
export function useForecastWeathers(): WeatherData[] {
  const [weather, setWeather] = useStateWithLocalCache<WeatherData[]>([], FORECAST_WEATHERS_STORAGE_KEY, expiry);
  const geoLocation = useGeoLocation();

  const fetchForecastWeathers = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await APIOpenWeather.fetchForecast5daysByGeoLocation({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });
    setWeather(response);
  }, [geoLocation, setWeather]);

  useEffect(() => {
    if (weather === null) {
      fetchForecastWeathers();
    }
  }, [fetchForecastWeathers, weather]);

  useIntervalEffect(() => {
    fetchForecastWeathers();
  }, WEATHER_REFRESH_INTERVAL);

  return weather;
}
