// import Image from "next/image";

// const Banner = () => {
//   return (
//     <div className="w-full h-[650px] relative">
//       <Image
//        src={`/assets/stories_banner.jpg`} fill  alt={""} className="object-cover"/>
//     </div>
//   );
// };

// export default Banner;

// w-[375px] h-[317px]
// sm:w-[375px] sm:h-[317px]
// md:w-[768px] md:h-[650px]
// lg:w-[1440px] lg:h-[650px]




// import Image from "next/image";

// const Banner = () => {
//   return (
//     <div
//       className="
//         relative 
//         w-screen 
//         h-[317px] 
//         md:h-[650px]
//       "
//     >
//       <Image
//         src="/assets/stories_banner.jpg"
//         alt="Banner"
//         fill
//         className="object-cover"
//         priority
//       />
//     </div>
//   );
// };

// export default Banner;



import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative w-full h-[317px] md:h-[650px]">
      <Image
        src="/assets/stories_banner.jpg"
        alt="Stories Banner"
        fill
        className="object-cover"
        priority
        quality={90}
        sizes="100vw"
      />
    </section>
  );
};

export default Banner;
