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
  font-family: Barlow;
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
  ${({ textTransform }) =>
    textTransform &&
    scCss`
        text-transform: ${textTransform};
      `}
  ${({ transform }) =>
    transform &&
    scCss`
        transform: ${transform};
      `}
  ${({ placeItems }) =>
    placeItems &&
    scCss`
        place-items: ${placeItems};
      `}    
  ${({ flexDirection }) =>
    flexDirection &&
    scCss`
        flex-direction: ${flexDirection};
      `}
  ${({ inset }) =>
    inset &&
    scCss`
        inset: ${inset};
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
