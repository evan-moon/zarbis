import { useState, useEffect } from 'react';
import { useGeoLocation } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData } from 'src/models/Weather';

export function useForecastWathers(): WeatherData[] {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const geoLocation = useGeoLocation();

  useEffect(() => {
    (async () => {
      if (geoLocation) {
        const response = await APIOpenWeather.fetchForecast5daysByGeoLocation({
          lat: geoLocation.coords.latitude,
          lon: geoLocation.coords.longitude,
        });
        setWeather(response);
      }
    })();
  }, [geoLocation]);

  return weather;
}
