import React from "react";
import Img from "next/image";
import { FormattedMessage } from "react-intl";
import { ImageWrapper } from "./Image.styles";

export const Image = React.memo(
  ({ src, alt, layout = "responsive", ...rest }) => (
    <ImageWrapper {...rest}>
      {src && (
        <FormattedMessage id={alt} defaultMessage={alt}>
          {(text) => (
            <Img
              src={src}
              alt={text}
              width="100%"
              height="100%"
              layout={layout}
            />
          )}
        </FormattedMessage>
      )}
      {/* {src && (
      <Img src={src} alt={alt} width="100%" height="100%" className={classes} />
    )} */}
    </ImageWrapper>
  )
);
