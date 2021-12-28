import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { fontSize, variant } from "styled-system";
import PropTypes from "prop-types";

import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";
import Loader from "../Loader";

const ButtonBase = styled(Box)`
  position: relative;
  cursor: pointer;
  outline: none;
  display: grid;
  align-items: center;
  font-family: Barlow;
  /* padding: 0 10px; */

  ${variant({
    variants: {
      primary: {
        color: "white",
        bg: "blue.500",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "1px solid",
        borderColor: "blue.500",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        // width: "100%",
        "&:active, &:hover": {
          bg: "transparent",
          color: "blue.500",
          boxShadow: "0 10px 25px rgba(25, 118, 210, 0.5)",
        },

        "&:focus": {
          outline: "none",
        },
      },
      secondary: {
        color: "blue.500",
        fontFamily: "primary",
        bg: "transparent",
        border: "1px solid",
        fontSize: "16px",
        borderRadius: "4px",
        px: "10px",
        borderColor: "blue.500",
        cursor: "pointer",
        transition: "all .3s",
        "&:active, :hover": {
          bg: "blue.500",
          color: "white",
          boxShadow: "0 10px 25px rgba(25, 118, 210, 0.5)",
        },
        "&:focus": {
          outline: "none",
        },
      },
      default: {
        color: "rgba(17, 17, 17, 0.5)",
        bg: "transparent",
        fontFamily: "primary",
        fontSize: "16px",
        border: "1px solid",
        borderColor: "rgba(17, 17, 17, 0.5)",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        // width: "100%",
        "&:active, &:hover": {
          bg: "transparent",
          color: "rgba(17, 17, 17, 0.5)",
        },

        "&:focus": {
          outline: "none",
        },
      },
      warning: {
        color: "rgba(17, 17, 17, 0.6)",
        bg: "yellow.600",
        fontFamily: "primary",
        fontSize: "16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all .3s",
        "&:active, &:hover": {
          bg: "#d5b304",
          color: "rgba(17, 17, 17, 0.6)",
          boxShadow: "0 10px 25px rgba(25, 118, 210, 0.5)",
        },

        "&:focus": {
          outline: "none",
        },
      },
      landing: {
        color: "white",
        fontFamily: "primary",
        border: "none",
        borderRadius: "15px",
        cursor: "pointer",
        transition: "all .3s",
        "&:focus": {
          outline: "none",
        },
      },
      modal: {
        color: "white",
        fontFamily: "primary",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all .3s",
        "&:focus": {
          outline: "none",
        },
      },
      login: {
        color: "#495057",
        fontFamily: "bold",
        fontSize: "20px",
        border: "2px solid #5A6FF0",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all .3s",
        "&:focus": {
          outline: "none",
        },
      },
      download: {
        color: "white",
        bg: "red.500",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "1px solid",
        borderColor: "red.500",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        // width: "100%",
        "&:active, &:hover": {
          bg: "#b83030",
          color: "blue.500",
          boxShadow: "0 10px 25px rgba(25, 118, 210, 0.5)",
        },

        "&:focus": {
          outline: "none",
        },
      },
    },
  })}
  &[disabled] {
    background-color: #ddd;
    border-color: #ddd;
    color: white;
    pointer-events: none;
  }
`;

export const Button = ({
  disabled,
  loading,
  children,
  variant: v = "primary",
  onClick,
  showAsyncLoad,
  fontWeight,
  classes,
  label,
  ...rest
}) => {
  const [asyncLoading, setLoading] = useState(false);
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true);
      try {
        await onClick?.(arg);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [onClick]
  );

  return (
    <ButtonBase
      variant={v}
      as="button"
      color="white"
      {...rest}
      onClick={onClickHandler}
      disabled={disabled || loading || (showAsyncLoad && asyncLoading)}
      overflow="hidden"
      className={classes}
    >
      {(loading || (showAsyncLoad && asyncLoading)) && (
        <Flex
          left={0}
          right={0}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          fontSize={2}
          height="15px"
          width="15px"
          mx="auto"
        >
          <Loader loading />
        </Flex>
      )}
      {label ? (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          id={label}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      ) : (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      )}
    </ButtonBase>
  );
};

Button.defaultProps = {
  as: "button",
  width: "100%",
  fontSize: "1.6rem",
};

Button.propTypes = {
  // label: PropTypes.string,
  fontSize: PropTypes.string,
  as: PropTypes.string,
  width: PropTypes.string,
};
