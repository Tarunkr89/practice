import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Box from "atoms/Box";

export const Text = forwardRef(
  ({ children, id, classes, values, ...props }, textRef) =>
    id ? (
      <FormattedMessage id={id} values={values}>
        {(text) => (
          <Box {...props} ref={textRef} className={classes}>
            {text}
          </Box>
        )}
      </FormattedMessage>
    ) : (
      <Box {...props} ref={textRef} className={classes}>
        {children || null}
      </Box>
    )
);

Text.defaultProps = {
  fontSize: "1.6rem",
  id: null,
};

Text.propTypes = {
  id: PropTypes.string,
  fontSize: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
};
