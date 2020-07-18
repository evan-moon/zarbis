import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Position } from 'src/constants';
import Background from 'src/components/Background';
import ClockWidget from 'src/components/Widgets/Clock';
import WeatherWidget from 'src/components/Widgets/Weather';
import AirQualityWidget from 'src/components/Widgets/AirQuality';
import { WeatherData } from './models';

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const handleChangeWeather = useCallback((weather: WeatherData | null) => setCurrentWeather(weather), []);

  return (
    <div className="App">
      <Background weather={currentWeather} />
      <Padding>
        <DisplayBox>
          <ClockWidget horizontal={Position.Center} vertical={Position.Center} />
          <WeatherWidget horizontal={Position.Right} vertical={Position.Top} onChangeWeather={handleChangeWeather} />
          <AirQualityWidget horizontal={Position.Right} vertical={Position.Bottom} />
        </DisplayBox>
      </Padding>
    </div>
  );
};

const Padding = styled.div`
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
`;
const DisplayBox = styled.div`
  position: relative;
  height: 100%;
`;

export default App;
