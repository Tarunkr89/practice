import * as React from "react";

function SearchIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17 16" fill="none" {...props}>
      <path
        d="M8.013 13.444a6.228 6.228 0 006.233-6.222A6.228 6.228 0 008.013 1 6.228 6.228 0 001.78 7.222a6.228 6.228 0 006.233 6.222zM15.804 15l-3.389-3.383"
        stroke="#495057"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
