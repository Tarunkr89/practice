import * as React from "react";

function Envelope(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 33" fill="none" {...props}>
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={32}
        height={33}
      >
        <path fill="#fff" d="M0 .5h32v32H0z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.666 5.833H5.333A2.668 2.668 0 002.666 8.5v16a2.668 2.668 0 002.667 2.667h21.333a2.668 2.668 0 002.667-2.667v-16a2.668 2.668 0 00-2.667-2.667zm0 6.267l-10.667 7.112L5.333 12.1V8.896l10.666 7.11 10.667-7.11V12.1z"
          fill="#556EE6"
        />
      </g>
    </svg>
  );
}

const MemoEnvelope = React.memo(Envelope);
export default MemoEnvelope;
