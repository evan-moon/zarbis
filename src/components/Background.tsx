import React from 'react';
import styled from 'styled-components';
import { WeatherData, WeatherType } from 'src/models';
import { useWeatherPhoto } from 'src/hooks';

interface Props {
  weather: WeatherData | null;
}
const Background = ({ weather: weatherData }: Props) => {
  const photo = useWeatherPhoto(weatherData?.type.category ?? WeatherType.알수없음);
  const windowWidth = window.innerWidth;

  return (
    <BackgroundWrapper>
      <BackgroundImage src={`${photo}?fit=crop&w=${windowWidth}&q=80`} />
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const BackgroundImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default Background;
