import { useEffect, useState } from 'react';

export function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState<Position | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setGeoLocation(position);
      },
      e => {
        throw e;
      }
    );
  }, []);

  return geoLocation;
}
