import { useState, useEffect } from 'react';
import { useGeoLocation } from './useGeoLocation';
import APIAirQuality from 'src/api/APIAirQuality';
import { AqiData } from 'src/interfaces';

export function useAirQuality (): AqiData | null {
  const [aqi, setAqi] = useState<AqiData | null>(null);
  const geolocation = useGeoLocation();

  useEffect(() => {
    if (geolocation) {
      APIAirQuality.fetchAirQuality({
        lat: geolocation.coords.latitude,
        lon: geolocation.coords.longitude
      }).then(res => {
        setAqi(res);
      });
    }
  }, [geolocation]);

  return aqi ? aqi : null;
}
