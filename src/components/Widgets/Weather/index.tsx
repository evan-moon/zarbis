import React, { useMemo, useState, useEffect } from 'react';
import { WidgetProps } from 'src/models';
import Widget from 'src/components/Widgets/Widget';
import { convertTemperature } from 'src/utils';
import { TemperatureUnit } from 'src/constants';
import { useCurrentWeather } from 'src/hooks';
import styled from 'styled-components';
import WeatherIcon from 'src/components/WeatherIcon';
import { WeatherData } from 'src/models/Weather';
import ForecastGraph from './ForecastGraph';

interface Props extends WidgetProps {
  onChangeWeather?: (weather: WeatherData | null) => void;
}
const WeatherWidget = ({ horizontal, vertical, onChangeWeather }: Props) => {
  const weatherData = useCurrentWeather();
  const [showDescription, setShowDescription] = useState(false);
  const currentCelsiusTemp = useMemo<number>(() => {
    if (!weatherData) {
      return Infinity;
    }
    return convertTemperature(weatherData.temp, TemperatureUnit.Celsius);
  }, [weatherData]);

  useEffect(() => {
    onChangeWeather?.(weatherData);
  }, [weatherData, onChangeWeather]);

  if (!weatherData) {
    return null;
  }

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <div onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <WeatherView>
          <WeatherIcon icon={weatherData.weather.icon} />
          {weatherData.weather.main}, {currentCelsiusTemp}
          <small>&#8451;</small>
        </WeatherView>
        <ForecastGraph />
        <LocationView>
          {weatherData.city}, {weatherData.country}
        </LocationView>
      </div>
      {showDescription && <TooltipDescription>{weatherData.type.description}</TooltipDescription>}
    </Widget>
  );
};

const WeatherView = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: right;
  small {
    font-size: 1rem;
  }
`;

const LocationView = styled.div`
  text-align: right;
`;

const TooltipDescription = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 80%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  text-align: center;
`;

export default WeatherWidget;
