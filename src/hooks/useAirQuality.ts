import { useState, useEffect, useCallback } from 'react';
import { useGeoLocation } from './useGeoLocation';
import APIAirQuality from 'src/api/APIAirQuality';
import { AqiData } from 'src/models';
import { useIntervalEffect } from './useIntervalEffect';
import { WEATHER_REFRESH_INTERVAL } from 'src/constants';

export function useAirQuality(): AqiData | null {
  const [aqi, setAqi] = useState<AqiData | null>(null);
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
  }, [geoLocation]);

  useEffect(() => {
    fetchAirQuality();
  }, [fetchAirQuality]);

  useIntervalEffect(() => {
    fetchAirQuality();
  }, WEATHER_REFRESH_INTERVAL);

  return aqi != null ? aqi : null;
}
