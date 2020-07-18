import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Widget from 'src/components/Widgets/Widget';
import { WidgetProps } from 'src/models';

interface Props extends WidgetProps {
  showDate?: boolean;
}

const ClockWidget = ({ horizontal, vertical, showDate = true }: Props) => {
  const intervalTime = 1000; // 1s
  const [time, setTime] = useState(new Date());
  const hours = useMemo(() => format(time, 'HH'), [time]);
  const minutes = useMemo(() => format(time, 'mm'), [time]);
  const formattedDate = useMemo(() => {
    return format(time, 'Y, MMM d');
  }, [time]);

  const isShowColon = useMemo(() => time.getSeconds() % 2 === 0, [time]);

  useEffect(() => {
    function updateTime() {
      setTime(new Date());
    }
    const interval = setInterval(updateTime, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <HourAndSecondView>
        {hours}
        <Colon show={isShowColon}>:</Colon>
        {minutes}
      </HourAndSecondView>
      {showDate ? <DateView>{formattedDate}</DateView> : null}
    </Widget>
  );
};

const HourAndSecondView = styled.div`
  font-size: 12rem;
  letter-spacing: 0.1rem;
`;
const Colon = styled.span<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  font-weight: lighter;
  transition: opacity 0.2s ease-in-out;
  font-size: 10rem;
`;
const DateView = styled.div`
  font-size: 2rem;
  text-align: right;
`;

export default ClockWidget;
