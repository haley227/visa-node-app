import styled, { css } from 'styled-components';
import { tabletUp } from 'consts/breakpoints';

export const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  width: 100%;

  ${tabletUp(css`
    padding: 2rem;
    min-width: 250px;
    min-height: 250px;
  `)};
`;
