import styled, { css } from "styled-components";
import { tabletUp } from "../../consts/breakpoints";

export const StyledCard = styled.div`
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  width: 100%;

  ${tabletUp(css`
    min-width: 250px;
    min-height: 250px;
  `)};
`;