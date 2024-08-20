import styled, { css } from 'styled-components';
import COLORS from 'consts/colors';
import { tabletUp } from 'consts/breakpoints';

export const ButtonContainer = styled.div<{ align: 'space-between' | 'space-around' | 'center' }>`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: ${({ align }) => align};

  ${tabletUp(css`
    flex-direction: row;
    gap: 1rem;
  `)};
`;

export const StyledButton = styled.button<{ type: string }>`
  background-color: ${({ type }) => (type === 'error' ? COLORS.errorRed : COLORS.visaBlue)};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  &:hover {
    filter: brightness(85%);
  }
  &:disabled {
    background-color: ${COLORS.gray2};
    cursor: not-allowed;
  }
`;
