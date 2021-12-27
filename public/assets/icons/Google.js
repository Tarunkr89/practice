import * as React from "react";

function Google(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={11}
        fill="#F4F4F4"
        stroke="#F4F4F4"
        strokeWidth={2}
      />
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M8.103 13.46l-.488 1.82-1.78.037A6.969 6.969 0 015 12c0-1.16.282-2.255.783-3.22l1.586.291.694 1.577a4.16 4.16 0 00.04 2.812z"
          fill="#FBBB00"
        />
        <path
          d="M18.878 10.692a7.006 7.006 0 01-.031 2.77 6.998 6.998 0 01-2.465 3.997l-1.997-.102-.283-1.765a4.173 4.173 0 001.795-2.13h-3.743v-2.77h6.724z"
          fill="#518EF8"
        />
        <path
          d="M16.382 17.459A6.97 6.97 0 0112 19a6.999 6.999 0 01-6.166-3.683l2.269-1.857a4.162 4.162 0 005.999 2.132l2.28 1.867z"
          fill="#28B446"
        />
        <path
          d="M16.468 6.612L14.2 8.468a4.163 4.163 0 00-6.137 2.18L5.784 8.78A6.999 6.999 0 0112 5a6.97 6.97 0 014.468 1.612z"
          fill="#F14336"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(5 5)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoGoogle = React.memo(Google);
export default MemoGoogle;
