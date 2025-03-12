import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const CardStyled = styled.div`
  padding: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Card = ({ children }: PropsWithChildren) => {
  return <CardStyled>{children}</CardStyled>;
};
