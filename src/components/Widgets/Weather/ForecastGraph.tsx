import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useForecastWeathers } from 'src/hooks';

const GRAPH_MAX_HEIGHT = 30;

const ForecastGraph = () => {
  const [todayWeather, ...weathers] = useForecastWeathers();
  const maxTempDiff = useMemo(() => {
    return weathers.reduce((result, weather) => {
      const diff = weather.temp - todayWeather.temp;
      const abs = Math.abs(diff);
      return abs > result ? abs : result;
    }, 0);
  }, [todayWeather, weathers]);

  const getGraphHeight = useCallback(
    (temp: number) => {
      const diff = temp - todayWeather.temp;
      const abs = Math.abs(diff);
      return {
        diff: (abs / maxTempDiff) * (GRAPH_MAX_HEIGHT / 2),
        isNegative: diff < 0,
      }
    },
    [todayWeather, maxTempDiff]
  );

  return (
    <Wrapper>
      {weathers.map((weather, index) => {
        const height = getGraphHeight(weather.temp);
        return <Graph key={index} height={height.diff} isNegative={height.isNegative} />;
      })}
    </Wrapper>
  );
};

export default ForecastGraph;

const Wrapper = styled.div`
  display: flex;
  height: ${GRAPH_MAX_HEIGHT}px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Graph = styled.div<{ height: number; isNegative: boolean; }>`
  width: ${100 / 7}%;
  height: ${({ height }) => height}px;
  transform: translateY(${({ isNegative }) => isNegative ? '-50%' : '50%'});
  background-color: #fff;
`;
