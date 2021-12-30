import * as React from "react";

function ChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

const MemoChevronLeft = React.memo(ChevronLeft);
export default MemoChevronLeft;
