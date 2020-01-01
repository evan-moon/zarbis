import React from 'react';
import Background from 'src/components/Background';
import ClockWidget from 'src/components/Widgets/Clock';
import { Position } from 'src/constants';
import WeatherWidget from 'src/components/Widgets/Weather';

const App: React.FC = () => {
  return (
    <div className="App">
      <ClockWidget horizontal={Position.Center} vertical={Position.Center} />
      <WeatherWidget horizontal={Position.Right} vertical={Position.Top} />
      <Background />
    </div>
  );
}

export default App;
