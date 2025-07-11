// import React from "react";

// const Youtube = () => {
//   return (
//     <svg
//       width="21"
//       height="20"
//       viewBox="0 0 21 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M10.3335 0C4.811 0 0.333496 4.4775 0.333496 10C0.333496 15.5225 4.811 20 10.3335 20C15.856 20 20.3335 15.5225 20.3335 10C20.3335 4.4775 15.856 0 10.3335 0ZM14.0343 14.0767C12.2827 14.1967 8.381 14.1967 6.63183 14.0767C4.73516 13.9467 4.51433 13.0183 4.50016 10C4.51433 6.97583 4.73766 6.05333 6.63183 5.92333C8.381 5.80333 12.2835 5.80333 14.0343 5.92333C15.9318 6.05333 16.1518 6.98167 16.1668 10C16.1518 13.0242 15.9293 13.9467 14.0343 14.0767ZM12.7643 9.99667L8.66683 8.04833V11.9517L12.7643 9.99667Z"
//         fill="white"
//       />
//     </svg>
//   );
// };

// export default Youtube;


import React from "react";

const Youtube = () => {
  return (
    <div className="group w-5 h-5 cursor-pointer">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="youtube-gradient"
            x1="0"
            y1="20"
            x2="21"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D3205A" />
            <stop offset="1" stopColor="#FF5A5A" />
          </linearGradient>
        </defs>

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3335 0C4.811 0 0.333496 4.4775 0.333496 10C0.333496 15.5225 4.811 20 10.3335 20C15.856 20 20.3335 15.5225 20.3335 10C20.3335 4.4775 15.856 0 10.3335 0ZM14.0343 14.0767C12.2827 14.1967 8.381 14.1967 6.63183 14.0767C4.73516 13.9467 4.51433 13.0183 4.50016 10C4.51433 6.97583 4.73766 6.05333 6.63183 5.92333C8.381 5.80333 12.2835 5.80333 14.0343 5.92333C15.9318 6.05333 16.1518 6.98167 16.1668 10C16.1518 13.0242 15.9293 13.9467 14.0343 14.0767ZM12.7643 9.99667L8.66683 8.04833V11.9517L12.7643 9.99667Z"
          fill="white"
          className="transition-all duration-300 group-hover:fill-[url(#youtube-gradient)]"
        />
      </svg>
    </div>
  );
};

export default Youtube;
