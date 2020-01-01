import { useEffect, useState } from 'react';

export function useGeolocation () {
  const [geoLocation, setGeoLocation] = useState<Position | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      setGeoLocation(position);
    }, e => {
      throw e;
    });
  }, []);

  return geoLocation;
}
