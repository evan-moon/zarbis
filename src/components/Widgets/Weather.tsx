import React, { useMemo } from 'react';
import { WidgetProps } from 'src/interfaces/Props';
import Widget from 'src/components/Widgets/Widget';
import { convertTemperature } from 'src/utils/convertTemperature';
import { TemperatureUnit } from 'src/constants';
import { useWeather } from 'src/hooks/useWeather';
import styled from 'styled-components';

const WeatherWidget: React.FC<WidgetProps> = ({ horizontal, vertical }) => {
  const weatherData = useWeather();
  const celsiusTemp = useMemo<number>(() => {
    if (!weatherData) {
      return Infinity;
    }
    return convertTemperature(weatherData.temp, TemperatureUnit.CELSIUS);
  }, [weatherData]);

  if (!weatherData) {
    return null;
  }

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <WeatherView>
        {weatherData.weather.main}, {celsiusTemp}<small>&#8451;</small>
      </WeatherView>
      <LocationView>
        {weatherData.city}, {weatherData.country}
      </LocationView>
    </Widget>
  )
}

const WeatherView = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: .5rem;
  small {
    font-size: 1rem;
  }
`;

const LocationView = styled.div`
  color: #ffffff;
  font-weight: lighter;
`;

export default WeatherWidget;
