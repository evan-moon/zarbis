import { useEffect, useState } from 'react';
import { setLocalStorageData, getLocalStorageData } from 'src/utils/localStorage';
import { getCurrentPosition } from 'src/utils/getCurrentPosition';

const GEO_LOCATION_STORAGE_KEY = 'geoLocation';
export function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState<Position | null>(getLocalStorageData(GEO_LOCATION_STORAGE_KEY));

  useEffect(() => {
    (async () => {
      if (geoLocation) {
        return;
      }
      try {
        const position = await getCurrentPosition();
        if (position) {
          setGeoLocation(position);
          setLocalStorageData<Position>(GEO_LOCATION_STORAGE_KEY, {
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              altitude: position.coords.altitude,
              altitudeAccuracy: position.coords.altitudeAccuracy,
              heading: position.coords.heading,
              speed: position.coords.speed,
            },
            timestamp: position.timestamp,
          });
        }
      } catch (e) {
        throw e;
      }
    })();
  }, [geoLocation]);

  return geoLocation;
}
