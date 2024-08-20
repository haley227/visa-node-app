import { mobileUp, tabletUp } from 'consts/breakpoints';
import COLORS from 'consts/colors';
import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 4px;

  button {
    width: 100%;
  }

  ${mobileUp(css`
    gap: 1rem;
  `)};
`;

export const FormInput = styled.input< { hasError?: boolean; } >`
  padding: .5rem;
  border: 1px solid ${COLORS.gray2};
  border-radius: .25rem;
  box-sizing: border-box;
  align-items: center;

  ${({ hasError }) => hasError && `
    border-color: ${COLORS.errorRed};
  `}

  ${tabletUp(css`
    padding: 1rem;
  `)};
`;

export const BookCardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const ErrorText = styled.span`
  color: ${COLORS.errorRed};
  width: 100%;
  text-align: right;
  font-size: 12px;
`;
