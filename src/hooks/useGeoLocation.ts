import { useEffect } from 'react';
import { getCurrentPosition } from 'src/utils/getCurrentPosition';
import { useStateWithLocalCache } from './useStateWithLocalCache';

const GEO_LOCATION_STORAGE_KEY = 'geoLocation';
export function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useStateWithLocalCache<Position | null>(null, GEO_LOCATION_STORAGE_KEY);

  useEffect(() => {
    (async () => {
      if (geoLocation) {
        return;
      }
      try {
        const position = await getCurrentPosition();
        if (position) {
          // @NOTE Position객체를 Stringify하면 빈 객체인 것처럼 평가되기 때문에, Position 객체의 속성을 가진 객체를 만들어서 캐싱에 사용해야함
          const convertedPosition = {
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
          };
          setGeoLocation(convertedPosition);
        }
      } catch (e) {
        throw e;
      }
    })();
  }, [geoLocation, setGeoLocation]);

  return geoLocation;
}
