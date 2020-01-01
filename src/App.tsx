import React from 'react';
import styled from 'styled-components';
import { Position } from 'src/constants';
import Background from 'src/components/Background';
import ClockWidget from 'src/components/Widgets/Clock';
import WeatherWidget from 'src/components/Widgets/Weather';
import AirQualityWidget from 'src/components/Widgets/AirQuality';

const App: React.FC = () => {
  return (
    <div className="App">
      <Background />
      <Padding>
        <DisplayBox>
          <ClockWidget horizontal={Position.Center} vertical={Position.Center} />
          <WeatherWidget horizontal={Position.Right} vertical={Position.Top} />
          <AirQualityWidget horizontal={Position.Right} vertical={Position.Bottom} />
        </DisplayBox>
      </Padding>
    </div>
  );
}

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
