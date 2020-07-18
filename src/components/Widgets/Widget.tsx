import React, { ReactNode } from 'react';
import { WidgetProps } from 'src/models';
import styled from 'styled-components';
import { getCssPosition } from 'src/utils';

interface Props extends WidgetProps {
  children: ReactNode;
}

const Widget = ({ horizontal, vertical, children }: Props) => {
  return (
    <Wrapper horizontal={horizontal} vertical={vertical}>
      <Inner>{children}</Inner>
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
const Inner = styled.div`
  position: relative;
`;

export default Widget;
