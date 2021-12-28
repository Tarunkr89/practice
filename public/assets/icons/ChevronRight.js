import * as React from "react";

function ChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
}

const MemoChevronRight = React.memo(ChevronRight);
export default MemoChevronRight;
