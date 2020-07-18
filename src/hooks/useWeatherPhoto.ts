import { useMemo } from 'react';
import { WeatherType, WeatherPhoto, DayNight } from 'src/models';
import DefaultImage from 'src/assets/default-background.jpg';
import weatherPhotos from 'src/assets/weather-photos.json';

const now = new Date();

export function useWeatherPhoto(weatherType: WeatherType) {
  const dayNight: DayNight = now.getHours() > 18 ? 'Night' : 'Day';
  const avilablePhotos = useMemo(() => {
    return (weatherPhotos as WeatherPhoto[]).filter(photo => {
      const hasWeather = photo.weathers.some(weather => weather === weatherType);
      const isMatchedDayNight = photo.dayNight.some(dn => dn === dayNight);
      return hasWeather && isMatchedDayNight;
    });
  }, [dayNight, weatherType]);
  const randomCount = useMemo(() => Math.floor(Math.random() * avilablePhotos.length), [avilablePhotos]);

  return avilablePhotos.length > 0 ? avilablePhotos[randomCount].image : DefaultImage;
}
