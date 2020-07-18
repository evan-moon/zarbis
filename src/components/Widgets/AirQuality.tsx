import React, { useMemo } from "react";
import Widget from "src/components/Widgets/Widget";
import { WidgetProps } from "src/models";
import { useAirQuality } from "src/hooks";
import styled from "styled-components";
import { getAirQualityName } from "src/utils";

const AirQualityWidget: React.FC<WidgetProps> = ({ horizontal, vertical }) => {
  const aqi = useAirQuality();
  const qualityName = useMemo<string>(() => {
    if (!aqi) {
      return "";
    }

    return getAirQualityName(aqi.aqi);
  }, [aqi]);

  if (!aqi) {
    return null;
  }

  return (
    <Widget horizontal={horizontal} vertical={vertical}>
      <QualityTitle>Air Quality</QualityTitle>
      <QualityValue>{aqi.aqi}</QualityValue>
      <QualityName>{qualityName}</QualityName>
    </Widget>
  );
};

const QualityTitle = styled.div`
  text-align: center;
`;
const QualityValue = styled.div`
  font-size: 3rem;
  text-align: center;
`;
const QualityName = styled.div`
  text-align: center;
`;

export default AirQualityWidget;
