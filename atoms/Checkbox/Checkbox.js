import React, { useCallback, useEffect, useState } from "react";
import { Box } from "atoms/Box";
import { Flex } from "atoms/Flex";
import MemoTickIcon from "public/assets/icons/TickIcon";

export const Checkbox = ({
  children,
  size = 13,
  onChange,
  checked: value = false,
  activeColor = "blue.500",
}) => {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const onToggle = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  const onChangeHandler = useCallback(() => {
    if (typeof onChange === "function") {
      onChange(!checked);
    }
  }, [onChange, checked]);

  return (
    <Flex
      flexWrap="nowrap"
      alignItems="center"
      onClick={onChange ? onChangeHandler : onToggle}
      cursor="pointer"
    >
      <Box
        border="1px solid"
        borderColor={checked ? activeColor : "gray.400"}
        borderRadius="3px"
        width={size}
        height={size}
        mr={2}
        bg={checked ? activeColor : undefined}
      >
        <Box
          position="absolute"
          top={`${52 + size}%`}
          left={`${62 - size}%`}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <input checked={checked} type="checkbox" hidden disabled />
          <MemoTickIcon fill="white" width={size / 1.5} height={size / 1.5} />
        </Box>
      </Box>
      {children}
    </Flex>
  );
};
