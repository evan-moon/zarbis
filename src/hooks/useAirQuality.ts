import { useState, useEffect } from "react";
import { useGeoLocation } from "./useGeoLocation";
import APIAirQuality from "src/api/APIAirQuality";
import { AqiData } from "src/models";

export function useAirQuality(): AqiData | null {
  const [aqi, setAqi] = useState<AqiData | null>(null);
  const geolocation = useGeoLocation();

  useEffect(() => {
    (async () => {
      if (geolocation) {
        const response = await APIAirQuality.fetchAirQuality({
          lat: geolocation.coords.latitude,
          lon: geolocation.coords.longitude,
        });
        setAqi(response);
      }
    })();
  }, [geolocation]);

  return aqi != null ? aqi : null;
}
