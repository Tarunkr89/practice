import * as React from "react";

function HidePwd(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 23" fill="none" {...props}>
      <path
        d="M21.86 10.572c-.196-.269-4.88-6.583-10.86-6.583-5.981 0-10.664 6.314-10.86 6.583a.726.726 0 000 .856c.196.268 4.879 6.583 10.86 6.583 5.98 0 10.664-6.314 10.86-6.583a.725.725 0 000-.856zM11 16.56c-4.406 0-8.221-4.19-9.35-5.56C2.776 9.627 6.584 5.44 11 5.44c4.405 0 8.22 4.19 9.35 5.56-1.127 1.371-4.935 5.56-9.35 5.56z"
        fill="#000"
      />
      <path
        d="M11 6.648A4.357 4.357 0 006.648 11c0 2.4 1.952 4.352 4.352 4.352 2.4 0 4.351-1.952 4.351-4.352 0-2.4-1.952-4.352-4.351-4.352zm0 7.253a2.904 2.904 0 01-2.901-2.9c0-1.6 1.301-2.902 2.9-2.902 1.6 0 2.902 1.301 2.902 2.901 0 1.6-1.301 2.901-2.901 2.901z"
        fill="#000"
      />
      <path
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 1.061L1.061 21"
      />
    </svg>
  );
}

const MemoHidePwd = React.memo(HidePwd);
export default MemoHidePwd;
