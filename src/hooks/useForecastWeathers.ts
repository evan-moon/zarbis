import { useEffect, useCallback } from 'react';
import { useGeoLocation, useStateWithLocalCache } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { ForecastWeathersData } from 'src/models/Weather';
import { FORECAST_WEATHERS_CACHE_EXPIRY as expiry, WEATHER_REFRESH_INTERVAL } from 'src/constants';
import { useIntervalEffect } from './useIntervalEffect';

const FORECAST_WEATHERS_STORAGE_KEY = 'forecast_weathers';
export function useForecastWeathers(): ForecastWeathersData[] {
  const [weathers, setWeathers] = useStateWithLocalCache<ForecastWeathersData[]>(
    [],
    FORECAST_WEATHERS_STORAGE_KEY,
    expiry
  );
  const geoLocation = useGeoLocation();

  const fetchForecastWeathers = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await APIOpenWeather.fetchForecastWeathersByGeoLocation({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });
    const [, ...forcastWeathers] = response.daily.map(({ weather, temp, dt }) => ({
      weather: weather[0],
      temp: (temp.max + temp.min) / 2,
      date: new Date(dt * 1000).toISOString(),
    }));

    setWeathers(forcastWeathers);
  }, [geoLocation, setWeathers]);

  useEffect(() => {
    if (weathers.length === 0) {
      fetchForecastWeathers();
    }
  }, [fetchForecastWeathers, weathers]);

  useIntervalEffect(() => {
    fetchForecastWeathers();
  }, WEATHER_REFRESH_INTERVAL);

  return weathers;
}
