import { tabletUp } from 'consts/breakpoints';
import styled, { css } from 'styled-components';

export const Body = styled.div`
  padding: 1rem;

  ${tabletUp(css`
    padding: 2rem;
  `)};
`;
