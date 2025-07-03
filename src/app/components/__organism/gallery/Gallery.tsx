// "use client";
// import { sections } from "@/app/common/data";
// import { ArrowRight } from "../../__atoms";
// import HomeSwiper from "../homeSwiper/HomeSwiper";

// const Gallery = () => {
//   return (
//     <>
//       {sections.map(
//         ({
//           id,
//           bgColor,
//           textColor,
//           content,
//           images,
//           textOrder,
//           imageOrder,
//         }) => (
//           <div  key={id} className={`GALLERYITEM ${id} w-full flex flex-col md:flex-row`}>
//             <div
//               className={`w-full md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] ${bgColor} flex flex-col gap-[41px] items-center  ${
//                 textColor === "text-white" ? "text-white" : "text-black"
//               } md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] ${textOrder}`}
//             >
//               <div className="w-full flex flex-col gap-[21px]">
//                 <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//                   {content.title}
//                 </p>
//                 <p
//                   className={`text-[15px] leading-[25px] font-normal ${
//                     textColor === "text-white"
//                       ? "text-white/60"
//                       : "text-black/40"
//                   }`}
//                 >
//                   {content.description}
//                 </p>
//               </div>
//               <div className="flex gap-[18px]">
//                 {/* <h4 className="uppercase heading-h4 cursor-pointer hover:text-white/40 hover:scale-105 transition-colors duration-300 ease-out ">{content.cta}</h4> */}
//                 <h4
//                   className={`uppercase heading-h4 cursor-pointer transition-colors duration-300 ease-out hover:scale-105 ${
//                     bgColor === "bg-black"
//                       ? "hover:text-white/40"
//                       : "hover:text-black/70"
//                   }`}
//                 >
//                   {content.cta}
//                 </h4>

//                 <ArrowRight textColor={textColor} />
//               </div>
//             </div>

//             <div
//               className={`w-full md:flex-1 relative min-h-[430px] md:min-h-0 ${imageOrder}`}
//             >
//               <div className="absolute inset-0">
//                 <HomeSwiper images={images} />
//               </div>
//             </div>
//           </div>
//         )
//       )}
//     </>
//   );
// };

// export default Gallery;

import { sections } from "@/app/common/data";
import GalleryItem from "../galleryItem/GalleryItem";
const Gallery = () => {
  const homePageSections = sections.filter(
    (item) => item.content.title !== "features"
  );
  
  return (
    <>
      {homePageSections.map((section) => (
        <GalleryItem key={section.id} {...section} />
      ))}
    </>
  );
};

export default Gallery;
