import React from "react";

function Avatar() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0002 10.0001C12.3013 10.0001 14.1668 8.1346 14.1668 5.83341C14.1668 3.53223 12.3013 1.66675 10.0002 1.66675C7.69898 1.66675 5.8335 3.53223 5.8335 5.83341C5.8335 8.1346 7.69898 10.0001 10.0002 10.0001Z"
        stroke="#959595"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
        stroke="#959595"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function RightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
        stroke="white"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.9165 10H16.9415"
        stroke="white"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export { Avatar, RightIcon };
