import React, { useCallback } from 'react';
import { ForecastWeathersData } from 'src/models';
import styled from 'styled-components';
import { useCurrentWeather } from 'src/hooks';
import { convertTemperature } from 'src/utils';
import { TemperatureUnit } from 'src/constants';

interface Props {
  weathers: ForecastWeathersData[];
}
const ForecastGraph = ({ weathers }: Props) => {
  const todayWeather = useCurrentWeather();

  const getGraphHeight = useCallback(
    (temp: number) => {
      const todayTempCelsius = convertTemperature(todayWeather?.temp ?? 0, TemperatureUnit.Celsius);
      const tempCelsius = convertTemperature(temp, TemperatureUnit.Celsius);
      return (todayTempCelsius / tempCelsius) * 100;
    },
    [todayWeather]
  );

  return (
    <Wrapper>
      {weathers.map((weather, index) => (
        <Graph key={index} height={getGraphHeight(weather.temp)} />
      ))}
    </Wrapper>
  );
};

export default ForecastGraph;

const Wrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

const Graph = styled.div<{ height: number }>`
  width: ${100 / 7}%;
  height: ${({ height = 0 }) => height}%;
  background-color: #fff;
`;
