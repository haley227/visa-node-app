import styled from 'styled-components';
import COLORS from 'consts/colors';

export const ButtonContainer = styled.div<{ align: 'space-between' | 'space-around' | 'center' }>`
  display: flex;
  gap: 16px;
  justify-content: ${({ align }) => align};
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
    background-color: ${COLORS.grey1};
    cursor: not-allowed;
  }
`;
