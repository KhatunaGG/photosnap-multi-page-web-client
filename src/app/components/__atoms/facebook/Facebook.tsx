// import React from "react";

// const Facebook = () => {

//   //bg-[linear-gradient(to_top_right,_#6028F1,_#63AFDB)]
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
//         fill="white"
//         className="transition-colors duration-300 group-hover:fill-bg-[linear-gradient(to_top_right,_#6028F1,_#63AFDB)]"
//       />
//     </svg>
//   );
// };

// export default Facebook;



import React from "react";

const Facebook = () => {
  return (
    <div className="group w-5 h-5 cursor-pointer">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="facebook-gradient"
            x1="0"
            y1="20"
            x2="20"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6028F1" />
            <stop offset="1" stopColor="#63AFDB" />
          </linearGradient>
        </defs>

        <path
          d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
          fill="white"
          className="transition-all duration-300 group-hover:fill-[url(#facebook-gradient)]"
        />
      </svg>
    </div>
  );
};

export default Facebook;
