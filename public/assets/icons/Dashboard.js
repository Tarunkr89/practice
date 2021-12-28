import * as React from "react";

function Dashboard(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)" fill="#fff">
        <path d="M17.473 20.345H3.527a1.889 1.889 0 01-1.886-1.887V8.53a.656.656 0 011.312 0v9.927c0 .317.258.574.574.574h13.946a.575.575 0 00.574-.574V8.53a.656.656 0 111.312 0v9.927c0 1.04-.846 1.887-1.886 1.887z" />
        <path d="M20.344 10.826a.654.654 0 01-.464-.193l-8.162-8.161a1.725 1.725 0 00-2.436 0L1.12 10.634a.656.656 0 11-.928-.929l8.162-8.161a3.039 3.039 0 014.292 0l8.162 8.161a.656.656 0 01-.464 1.12zM13.125 20.344h-5.25a.656.656 0 01-.656-.657v-5.824c0-1.13.92-2.05 2.05-2.05h2.461c1.131 0 2.051.92 2.051 2.05v5.825a.656.656 0 01-.656.656zM8.531 19.03h3.938v-5.168a.74.74 0 00-.739-.738H9.27a.74.74 0 00-.739.738v5.168z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h21v21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoDashboard = React.memo(Dashboard);
export default MemoDashboard;
