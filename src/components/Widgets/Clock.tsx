import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Widget from 'src/components/Widgets/Widget';
import { WidgetProps } from 'src/interfaces/Props';

const Clock: React.FC<WidgetProps> = ({ horizontal, vertical }) => {
  const intervalTime = 30000; // 30s
  const [time, setTime] = useState(new Date());
  const hourAndSecond = format(time, 'HH:mm');

  function updateTime () {
    setTime(new Date());
  }

  useEffect(() => {
    const interval = setInterval(updateTime, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <HourAndSecond>{hourAndSecond}</HourAndSecond>
    </Widget>
  );
};

const HourAndSecond = styled.div`
  font-size: 8rem;
  font-weight: lighter;
  color: #ffffff;
`;

export default Clock;
