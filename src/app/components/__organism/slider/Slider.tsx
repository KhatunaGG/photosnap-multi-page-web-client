// import Image from "next/image";

// const Slider = () => {
//   return (
//     <section className="w-full h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:animate-loop-scroll">
//       {["home_4.png", "home_5.png", "home_6.png", "home_7.png"].map(
//         (img, i) => {
//           return (
//             <div key={i} className="relative w-full h-[375px] md:h-[500px]">
//               <Image 
//                 src={`/assets/${img}`} 
//                 alt={`Bitmap ${i + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 375px, (max-width: 1024px) 389px, 360px"
//                 className="object-cover"
//                 priority={i < 2} 
//               />
//             </div>
//           );
//         }
//       )}
//     </section>
//   );
// };

// export default Slider;




import Image from "next/image";

const Slider = () => {
  const images = ["home_4.png", "home_5.png", "home_6.png", "home_7.png"];
  
  return (
    <section className="w-full h-full bg-green-400">
      {/* Mobile and Tablet: Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden">
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-[375px] md:h-[500px]">
            <Image 
              src={`/assets/${img}`} 
              alt={`Bitmap ${i + 1}`}
              fill
              sizes="(max-width: 768px) 375px, (max-width: 1024px) 389px"
              className="object-cover"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* Large Screen: Infinite Scroll */}
      <div className="hidden lg:block overflow-hidden h-[500px]">
        <div className="flex lg:animate-loop-scroll">
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-[360px] h-[500px]">
              <Image 
                src={`/assets/${img}`} 
                alt={`Bitmap ${(i % images.length) + 1}`}
                fill
                sizes="360px"
                className="object-cover"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;