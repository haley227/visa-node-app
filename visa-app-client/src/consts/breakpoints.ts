import { css,  StyledObject } from "styled-components";

const size = {
  tablet: '768px',
  desktop: '1024px',
  desktopL: '1440px',
};

export const tabletUp = (inner: any) => css`
  @media (min-width: ${size.tablet}) {
    ${inner};
  }
`;

export const desktopUp = (inner: StyledObject<object>) => css`
  @media (min-width: ${size.desktop}) {
    ${inner};
  }
`;

export const desktopLUp = (inner: StyledObject<object>) => css`
  @media (min-width: ${size.desktopL}) {
    ${inner};
  }
`;