import styled, { css as scCss } from "styled-components";
import systemCss from "@styled-system/css";

import {
  color,
  layout,
  grid,
  space,
  position,
  background,
  border,
  shadow,
  typography,
  flexbox,
} from "styled-system";

export const Box = styled.div`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${position}
  ${grid}
  ${border}
  ${typography}
  ${flexbox}
  ${shadow}
  ${({ css }) => css && systemCss(css)}
  ${({ cursor }) =>
    cursor &&
    scCss`
      cursor: ${cursor};
    `}
  ${({ transition }) =>
    transition &&
    scCss`
        transition: ${transition};
      `}

  ${({ whiteSpace }) =>
    whiteSpace &&
    scCss`
        white-space: ${whiteSpace};
      `}
  ${({ textTransforn }) =>
    textTransforn &&
    scCss`
        text-transform: ${textTransforn};
      `}
      ${({ fontWeight }) =>
    fontWeight &&
    scCss`
        font-weight: ${fontWeight};
      `}
  ${({ transform }) =>
    transform &&
    scCss`
        transform: ${transform};
      `}
      
  ${({ flexDirection }) =>
    flexDirection &&
    scCss`
        flex-direction: ${flexDirection};
      `}
      
  &:hover {
    ${({ _hover }) => _hover && systemCss(_hover)}
  }
  &:focus {
    ${({ _focus }) => _focus && systemCss(_focus)}
  }
  &:active {
    ${({ _active }) => _active && systemCss(_active)}
  }
`;
