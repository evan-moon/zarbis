import React from 'react';
import styled from 'styled-components';
import DefaultImage from 'src/assets/default-background.jpg';

const Background: React.FC = () => {
  return (
    <BackgroundWrapper>
      <BackgroundImage src={DefaultImage} />
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
