// import Image from "next/image";
// import { ArrowRight } from "../../__atoms";

// const Gallery = () => {
//   return (
//     <>
//       <div className="DIV_1 w-full flex flex-col  md:flex-row">
//         <div className="w-full md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] bg-black flex flex-col gap-[41px] items-center text-white md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] px-[111px]          order-2 md:order-none">
//           <div className="w-full flex flex-col gap-[21px]">
//             <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//               Create and share your photo stories.{" "}
//             </p>
//             <p className="text-[15px] lading-[25px] font-normal text-white/60">
//               Photosnap is a platform for photographers and visual storytellers.
//               We make it easy to share photos, tell stories and connect with
//               others.
//             </p>
//           </div>
//           <div className="flex gap-[18px]">
//             <h4 className="uppercase heading-h4">get an invite</h4>
//             <ArrowRight />
//           </div>
//         </div>

//         <div className="w-full md:flex-1 relative min-h-[430px] md:min-h-0          order-1 md:order-none">
//           {" "}
//           <Image
//             src={"/assets/home_1.png"}
//             alt={""}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>

//       <div className="DIV_2 w-full flex flex-col  md:flex-row">
//         <div className="md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] bg-white flex flex-col gap-[41px] items-center-between text-black  md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] px-[111px] order-2 md:order-2">
//           <div className="w-full flex flex-col gap-[21px]">
//             <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//               beautiful stories every time{" "}
//             </p>
//             <p className="text-[15px] lading-[25px] font-normal text-black/60">
//               Photosnap is a platform for photographers and visual storytellers.
//               We make it easy to share photos, tell stories and connect with
//               others.
//             </p>
//           </div>
//           <div className="flex gap-[18px]">
//             <h4 className="uppercase heading-h4">view the stories</h4>
//             <ArrowRight />
//           </div>
//         </div>
//         <div className="w-full md:flex-1 relative min-h-[430px] md:min-h-0     md:order-1 order-1">
//           {" "}
//           <Image
//             src={"/assets/home_2.png"}
//             alt={""}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>

//       <div className="DIV_3 w-full flex flex-col  md:flex-row">
//         <div className="md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] bg-black flex flex-col gap-[41px] items-center-between text-white md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] px-[111px]          order-2 md:order-none">
//           <div className="w-full flex flex-col gap-[21px]">
//             <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//               designed for everyone{" "}
//             </p>
//             <p className="text-[15px] lading-[25px] font-normal text-white/60">
//               Photosnap can help you create stories that resonate with your
//               audience. Our tool is designed for photographers of all levels,
//               brands, businesses you name it.
//             </p>
//           </div>
//           <div className="flex gap-[18px]">
//             <h4 className="uppercase heading-h4">get an invite</h4>
//             <ArrowRight />
//           </div>
//         </div>

//         <div className="flex-1 relative  min-h-[430px] md:min-h-0        md:order-1 order-1">
//           {" "}
//           <Image
//             src={"/assets/home_3.png"}
//             alt={""}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;

// "use client";
// import { ArrowRight } from "../../__atoms";
// import HomeSwiper from "../homeSwiper/HomeSwiper";

// const Gallery = () => {
//   const slides1 = ["/assets/home_1.png", "/assets/home_2.png", "/assets/home_3.png"];
//   const slides2 = ["/assets/home_2.png", "/assets/home_3.png",  "/assets/home_1.png"];
//   const slides3 = ["/assets/home_3.png", "/assets/home_1.png", "/assets/home_2.png"];

//   return (
//     <>
//       <div className="DIV_1 w-full flex flex-col md:flex-row">
//         <div className="w-full md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] bg-black flex flex-col gap-[41px] items-center text-white md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] order-2 md:order-none">
//           <div className="w-full flex flex-col gap-[21px]">
//             <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//               Create and share your photo stories.
//             </p>
//             <p className="text-[15px] leading-[25px] font-normal text-white/60">
//               Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
//             </p>
//           </div>
//           <div className="flex gap-[18px]">
//             <h4 className="uppercase heading-h4">get an invite</h4>
//             <ArrowRight />
//           </div>
//         </div>

//         <div className="w-full md:flex-1 relative min-h-[430px] md:min-h-0 order-1 md:order-none">
//           <div className="absolute inset-0">
//             <HomeSwiper images={slides1} />
//           </div>
//         </div>
//       </div>

//       <div className="DIV_2 w-full flex flex-col md:flex-row">
//         <div className="md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] bg-white flex flex-col gap-[41px] items-center-between text-black md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] order-2 md:order-2">
//           <div className="w-full flex flex-col gap-[21px]">
//             <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//               beautiful stories every time
//             </p>
//             <p className="text-[15px] leading-[25px] font-normal text-black/60">
//               Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
//             </p>
//           </div>
//           <div className="flex gap-[18px]">
//             <h4 className="uppercase heading-h4">view the stories</h4>
//             <ArrowRight />
//           </div>
//         </div>

//         <div className="w-full md:flex-1 relative min-h-[430px] md:min-h-0 md:order-1 order-1">
//           <div className="absolute inset-0">
//             <HomeSwiper images={slides2} />
//           </div>
//         </div>
//       </div>

//       <div className="DIV_3 w-full flex flex-col md:flex-row">
//         <div className="md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] bg-black flex flex-col gap-[41px] items-center-between text-white md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] order-2 md:order-none">
//           <div className="w-full flex flex-col gap-[21px]">
//             <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
//               designed for everyone
//             </p>
//             <p className="text-[15px] leading-[25px] font-normal text-white/60">
//               Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.
//             </p>
//           </div>
//           <div className="flex gap-[18px]">
//             <h4 className="uppercase heading-h4">get an invite</h4>
//             <ArrowRight />
//           </div>
//         </div>

//         <div className="flex-1 relative min-h-[430px] md:min-h-0 md:order-1 order-1">
//           <div className="absolute inset-0">
//             <HomeSwiper images={slides3} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;








"use client";
import { sections } from "@/app/data/data";
import { ArrowRight } from "../../__atoms";
import HomeSwiper from "../homeSwiper/HomeSwiper";

const Gallery = () => {
  return (
    <>
      {sections.map(
        ({
          id,
          bgColor,
          textColor,
          content,
          images,
          textOrder,
          imageOrder,
        }) => (
          <div key={id} className={`${id} w-full flex flex-col md:flex-row`}>



            <div
              className={`w-full md:w-[64.45%] md:max-w-[495px] lg:w-[42.36%] lg:max-w-[610px] ${bgColor} flex flex-col gap-[41px] items-center  ${
                textColor === "text-white" ? "text-white" : "text-black"
              } md:px-[54px] lg:px-[111px] py-[72px] px-8 md:py-[173px] ${textOrder}`}
            >
              <div className="w-full flex flex-col gap-[21px]">
                <p className="text-[40px] font-bold tracking-[4.167px] uppercase">
                  {content.title}
                </p>
                <p
                  className={`text-[15px] leading-[25px] font-normal ${
                    textColor === "text-white"
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
                  {content.description}
                </p>
              </div>
              <div className="flex gap-[18px]">
                <h4 className="uppercase heading-h4">{content.cta}</h4>
                <ArrowRight bg={textColor} />
              </div>
            </div>



           
            <div
              className={`w-full md:flex-1 relative min-h-[430px] md:min-h-0 ${imageOrder}`}
            >
              <div className="absolute inset-0">
                <HomeSwiper images={images} />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Gallery;
