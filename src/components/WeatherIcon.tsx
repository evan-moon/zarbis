import React from 'react';
import styled from 'styled-components';

interface Props {
  icon?: string;
}
const WeatherIcon: React.FC<Props> = ({ icon = '' }) => {
  return icon !== '' ? <Icon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /> : null;
};

const Icon = styled.img`
  width: 2rem;
  vertical-align: middle;
`;

export default WeatherIcon;
