import React from 'react';
import styled from 'styled-components';
import Background from 'src/components/Background';
import ClockWidget from 'src/components/Widgets/Clock';
import { Position } from 'src/constants';
import WeatherWidget from 'src/components/Widgets/Weather';

const App: React.FC = () => {
  return (
    <div className="App">
      <Background />
      <Padding>
        <DisplayBox>
          <ClockWidget horizontal={Position.Center} vertical={Position.Center} />
          <WeatherWidget horizontal={Position.Right} vertical={Position.Top} />
        </DisplayBox>
      </Padding>
    </div>
  );
}

const Padding = styled.div`
  position: relative;
  height: 100vh;
  padding: 1rem;
`;
const DisplayBox = styled.div`
  position: relative;
  height: 100%;
`;

export default App;
