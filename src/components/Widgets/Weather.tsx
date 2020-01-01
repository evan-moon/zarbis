import React, { useMemo } from 'react';
import { WidgetProps } from 'src/interfaces';
import Widget from 'src/components/Widgets/Widget';
import { convertTemperature } from 'src/utils';
import { TemperatureUnit } from 'src/constants';
import { useWeather } from 'src/hooks';
import styled from 'styled-components';
import WeatherIcon from 'src/components/WeatherIcon';

const WeatherWidget: React.FC<WidgetProps> = ({ horizontal, vertical }) => {
  const weatherData = useWeather();
  const celsiusTemp = useMemo<number>(() => {
    if (!weatherData) {
      return Infinity;
    }
    return convertTemperature(weatherData.temp, TemperatureUnit.Celsius);
  }, [weatherData]);

  if (!weatherData) {
    return null;
  }

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <WeatherView>
        <WeatherIcon icon={weatherData.weather.icon} />
        {weatherData.weather.main}, {celsiusTemp}<small>&#8451;</small>
      </WeatherView>
      <LocationView>{weatherData.city}, {weatherData.country}</LocationView>
    </Widget>
  )
}

const WeatherView = styled.div`
  font-size: 1.5rem;
  margin-bottom: .5rem;
  text-align: right;
  small {
    font-size: 1rem;
  }
`;

const LocationView = styled.div`
  text-align: right;
`;

export default WeatherWidget;
