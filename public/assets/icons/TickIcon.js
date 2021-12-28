import * as React from "react";

function TickIcon(props) {
  return (
    <svg viewBox="0 0 342.357 342.357" width="1em" height="1em" {...props}>
      <path d="M290.04 33.286L118.861 204.427l-66.541-66.52L0 190.226l118.862 118.845L342.357 85.606z" />
    </svg>
  );
}

const MemoTickIcon = React.memo(TickIcon);
export default MemoTickIcon;
