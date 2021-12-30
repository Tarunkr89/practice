import * as React from "react";

function HamburgerIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
      <path
        fill="#494c4e"
        d="M17 5H1a1 1 0 010-2h16a1 1 0 010 2zm0 5H1a1 1 0 010-2h16a1 1 0 010 2zm0 5H1a1 1 0 010-2h16a1 1 0 010 2z"
      />
    </svg>
  );
}

const MemoHamburgerIcon = React.memo(HamburgerIcon);
export default MemoHamburgerIcon;
