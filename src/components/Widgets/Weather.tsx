import React, { useEffect } from 'react';
import { WidgetProps } from 'src/interfaces/Props';
import Widget from 'src/components/Widgets/Widget';

import { useWeather } from 'src/hooks/useWeather';
import styled from 'styled-components';

const WeatherWidget: React.FC<WidgetProps> = ({ horizontal, vertical }) => {
  const weather = useWeather();

  if (!weather) {
    return null;
  }

  console.log(weather);

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <WeatherView></WeatherView>
    </Widget>
  )
}

const WeatherView = styled.div`
  font-weight: lighter;
  color: #ffffff;
`;

export default WeatherWidget;
