import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Widget from 'src/components/Widgets/Widget';
import { WidgetProps } from 'src/interfaces';

interface Props extends WidgetProps {
  showDate?: boolean;
}

const ClockWidget: React.FC<Props> = ({
  horizontal,
  vertical,
  showDate = true,
}) => {
  const intervalTime = 30000; // 30s
  const [time, setTime] = useState(new Date());
  const hourAndSecond = format(time, 'HH:mm');
  const date = time.getDate();
  const formattedDate = useMemo(() => {
    return format(time, 'Y, MMM d');
  }, [date]);

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
      <HourAndSecondView>{hourAndSecond}</HourAndSecondView>
      {showDate ? <DateView>{formattedDate}</DateView> : null}
    </Widget>
  );
};

const HourAndSecondView = styled.div`
  font-size: 8rem;
  font-weight: lighter;
`;
const DateView = styled.div`
  font-size: 2rem;
  text-align: right;
`;

export default ClockWidget;
