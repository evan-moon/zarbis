import React from 'react';
import Widget from 'src/components/Widgets/Widget';
import { WidgetProps } from 'src/interfaces/Props';

const AirQualityWidget: React.FC<WidgetProps> = ({ horizontal, vertical }) => {
  return <Widget horizontal={horizontal} vertical={vertical}>hi</Widget>
};

export default AirQualityWidget;
