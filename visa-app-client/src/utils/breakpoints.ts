import { css } from 'styled-components';

export const breakpoints = (
  cssProp: string = 'padding',
  cssPropUnits: string = 'px',
  values: { [key: number]: number }[] = [],
  mediaQueryType: string = 'max-width',
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [Object.keys(value)[0], Object.values(value)[0]];
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, '');
  return css`
    ${breakpointProps}
  `;
};
