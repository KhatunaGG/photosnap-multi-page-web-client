import React from "react";

export type ArrowRightPropsType = {
  bg: string;
};

const ArrowRight = ({ bg }: ArrowRightPropsType) => {

  return (
    <svg
      width="42"
      height="14"
      viewBox="0 0 42 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 7H41.864"
        // stroke="white"
        stroke={bg === "text-white" ? "white" : "black"}
      />
      <path
        d="M35.4282 1L41.4282 7L35.4282 13"
        // stroke="white"
      stroke={bg === "text-white" ? "white" : "black"}
      />
    </svg>
  );
};

export default ArrowRight;
