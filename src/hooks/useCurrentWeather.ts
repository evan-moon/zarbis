import { useState, useEffect } from 'react';
import { useGeoLocation } from 'src/hooks';
import APIOpenWeather from 'src/api/APIOpenWeather';
import { WeatherData, WeatherCodeTypeMap } from 'src/models/Weather';
import weatherCodes from 'src/assets/weather-codes.json';

export function useCurrentWeather(): WeatherData | null {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const geoLocation = useGeoLocation();

  useEffect(() => {
    (async () => {
      if (geoLocation) {
        const response = await APIOpenWeather.fetchCurrentWeatherByGeoLocation({
          lat: geoLocation.coords.latitude,
          lon: geoLocation.coords.longitude,
        });
        const weather = response.weather[0] ?? {};
        setWeather({
          weather,
          city: response.name,
          country: response.sys.country,
          temp: response.main.temp,
          type: (weatherCodes as WeatherCodeTypeMap)[String(weather.id)],
        });
      }
    })();
  }, [geoLocation]);

  return weather != null ? weather : null;
}
