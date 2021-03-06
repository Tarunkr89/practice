import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function FullLogoIcon(props) {
  const [navbar, setNavbar] = useState(false);
  const { asPath } = useRouter();
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <svg
      width="10.8em"
      height="2em"
      viewBox="0 0 169 53"
      fill="none"
      {...props}
    >
      <path
        d="M62.192 39.893c-2.5 0-4.45-.692-5.85-2.075-1.383-1.384-2.075-3.359-2.075-5.925v-9.8h4.05v9.65c0 3.133 1.3 4.7 3.9 4.7 1.267 0 2.233-.375 2.9-1.125.666-.767 1-1.959 1-3.575v-9.65h4v9.8c0 2.566-.7 4.541-2.1 5.925-1.383 1.383-3.325 2.075-5.825 2.075zm11.927-17.8h7.95c1.9 0 3.575.366 5.025 1.1 1.467.716 2.6 1.733 3.4 3.05.817 1.316 1.225 2.85 1.225 4.6 0 1.75-.408 3.283-1.225 4.6-.8 1.316-1.933 2.341-3.4 3.075-1.45.716-3.125 1.075-5.025 1.075h-7.95v-17.5zm7.75 14.175c1.75 0 3.142-.484 4.175-1.45 1.05-.984 1.575-2.309 1.575-3.975 0-1.667-.525-2.984-1.575-3.95-1.033-.984-2.425-1.475-4.175-1.475h-3.7v10.85h3.7zm12.904-14.175h4.05v17.5h-4.05v-17.5zm11.828 3.3h-5.6v-3.3h15.25v3.3h-5.6v14.2h-4.05v-14.2zm26.004 10.9v3.3h-15.3v-2.625l9.6-11.575h-9.4v-3.3h14.725v2.625l-9.575 11.575h9.95zm10.998-2.9v6.2h-4.05v-6.25l-6.775-11.25h4.3l4.675 7.775 4.675-7.775h3.975l-6.8 11.3z"
        fill={navbar || asPath === "/contact-us" ? "#414042" : "#DBDADB"}
      />
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

const MemoFullLogoIcon = React.memo(FullLogoIcon);
export default MemoFullLogoIcon;
