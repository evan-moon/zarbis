import React, { useState } from 'react';
import styled from 'styled-components';
import { Position } from 'src/constants';
import { GlobalContext } from 'src/stores';
import Background from 'src/components/Background';
import ClockWidget from 'src/components/Widgets/Clock';
import WeatherWidget from 'src/components/Widgets/Weather';
import AirQualityWidget from 'src/components/Widgets/AirQuality';
import { WeatherData } from 'src/models';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ weather, setWeather }}>
        <Background />
        <Padding>
          <DisplayBox>
            <ClockWidget horizontal={Position.Center} vertical={Position.Center} />
            <WeatherWidget horizontal={Position.Right} vertical={Position.Top} />
            <AirQualityWidget horizontal={Position.Right} vertical={Position.Bottom} />
          </DisplayBox>
        </Padding>
      </GlobalContext.Provider>
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
