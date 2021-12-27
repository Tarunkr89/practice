import * as React from "react";

function LogoIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 49 46" fill="none" {...props}>
      <path
        d="M.918 36.863S17.056 22.95 17.612.869h8.907S26.702 22.57 6.67 45.573a22.08 22.08 0 01-5.752-8.71z"
        fill="#F15A29"
      />
      <path
        d="M45.072 13.244S36.565 24.062 30.23 27.956C23.895 31.85 18.169 35.933.748 36.863a26.465 26.465 0 005.733 8.73s11.321-.557 20.778-5.936c9.456-5.38 17.813-11.498 21.707-17.25l-3.894-9.163z"
        fill="#8DC63F"
      />
      <path
        d="M17.611.876h8.907s1.113 12.054 5.563 20.778l-7.049 5.563A55.463 55.463 0 0117.612.875zM32.082 36.889l6.61-4.45 7.493 6.465-5.753 6.689s-5.196-3.672-8.35-8.704z"
        fill="#F7BF17"
      />
    </svg>
  );
}

const MemoLogoIcon = React.memo(LogoIcon);
export default MemoLogoIcon;
