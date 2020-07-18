import { useState, useEffect } from "react";
import { useGeoLocation } from "src/hooks";
import APIOpenWeather from "src/api/APIOpenWeather";
import { WeatherData } from "src/models/OpenWeather";

export function useWeather(): WeatherData | null {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const geoLocation = useGeoLocation();

  useEffect(() => {
    (async () => {
      if (geoLocation) {
        const response = await APIOpenWeather.fetchWeatherByGeoLocation({
          lat: geoLocation.coords.latitude,
          lon: geoLocation.coords.longitude,
        });
        setWeather(response);
      }
    })();
  }, [geoLocation]);

  return weather != null ? weather : null;
}
