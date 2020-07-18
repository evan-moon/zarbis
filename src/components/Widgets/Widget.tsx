import React, { ReactNode } from 'react';
import { WidgetProps } from 'src/models';
import styled from 'styled-components';
import { getCssPosition } from 'src/utils';

interface Props extends WidgetProps {
  children: ReactNode;
}

const Widget: React.FC<Props> = ({ horizontal, vertical, children }) => {
  return (
    <Wrapper horizontal={horizontal} vertical={vertical}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<WidgetProps>`
  position: absolute;
  * {
    color: #ffffff;
    font-weight: lighter;
  }
  ${({ horizontal, vertical }) => getCssPosition({ horizontal, vertical })}
`;

export default Widget;
