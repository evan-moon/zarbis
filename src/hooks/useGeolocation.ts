import { useEffect, useState } from 'react';

export function useGeolocation () {
  const [geoLocation, setGeoLocation] = useState<Position | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setGeoLocation(position);
    });
  }, []);

  return geoLocation;
}
