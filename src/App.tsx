import React from 'react';
import Background from 'src/components/Background';
import Clock from 'src/components/Widgets/Clock';
import { Position } from 'src/constants';

const App: React.FC = () => {
  return (
    <div className="App">
      <Clock horizontal={Position.Center} vertical={Position.Center} />
      <Background />
    </div>
  );
}

export default App;
