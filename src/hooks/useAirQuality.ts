import { useState, useEffect } from 'react';
import { useGeolocation } from './useGeolocation';
import APIAirQuality from 'src/api/APIAirQuality';

export function useAirQuality () {
  const [aqi, setAqi] = useState();
  const geolocation = useGeolocation();

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
