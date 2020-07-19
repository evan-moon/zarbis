import { useEffect, useCallback } from 'react';
import { useGeoLocation } from './useGeoLocation';
import APIAirQuality from 'src/api/APIAirQuality';
import { AqiData } from 'src/models';
import { useIntervalEffect } from './useIntervalEffect';
import { WEATHER_REFRESH_INTERVAL, AQI_CACHE_EXPIRY as expiry } from 'src/constants';
import { useStateWithLocalCache } from './useStateWithLocalCache';

const AQI_STORAGE_KEY = 'aqi';
export function useAirQuality(): AqiData | null {
  const [aqi, setAqi] = useStateWithLocalCache<AqiData | null>(null, AQI_STORAGE_KEY, expiry);
  const geoLocation = useGeoLocation();

  const fetchAirQuality = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await APIAirQuality.fetchAirQuality({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });
    setAqi(response);
  }, [geoLocation, setAqi]);

  useEffect(() => {
    if (aqi === null) {
      fetchAirQuality();
    }
  }, [fetchAirQuality, aqi]);

  useIntervalEffect(() => {
    fetchAirQuality();
  }, WEATHER_REFRESH_INTERVAL);

  return aqi != null ? aqi : null;
}
