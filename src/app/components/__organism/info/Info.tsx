// "use client";
// import { pageInfo } from "@/app/common/data";
// import {
//   Bullhorn,
//   Domain,
//   DragDrop,
//   Exposure,
//   Forever,
//   Responsive,
// } from "../../__atoms";
// import { usePathname } from "next/navigation";

// const iconMap: Record<string, React.FC> = {
//   bullhorn: Bullhorn,
//   forever: Forever,
//   responsive: Responsive,
//   domain: Domain,
//   exposure: Exposure,
//   dragDrop: DragDrop,
// };

// const Info = () => {
//   const path = usePathname();
//   const normalizeIconName = (str: string) => str.toLowerCase();
//   const isFeaturesSectionPage = path.split("/")[1] === "features";
//   const dataToRender = isFeaturesSectionPage ? pageInfo : pageInfo.splice(0, 3);

//   return (
//     <section className="w-full py-20 px-[8.8%] md:px-[20.18%] md:py-[120px] lg:px-[11.45%]">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-[65px] md:gap-20 lg:gap-[30px]">
//         {dataToRender &&
//           dataToRender.map((item, i) => {
//             if (!item?.iconName) return null;
//             const iconKey = normalizeIconName(item.iconName);
//             const Icon = iconMap[iconKey];
//             return (
//               <div
//                 key={i}
//                 className="flex flex-col gap-12 items-center text-center justify-between hover:scale-95 transition duration-300 cursor-pointer "
//               >
//                 {Icon && <Icon />}
//                 <div className="DIV w-full flex flex-col gap-4 ">
//                   <h2 className="font-bold text-[18px] leading-[25px] text-[#000000]">
//                     {item?.subText}
//                   </h2>
//                   <p className="font-normal text-[15px] leading-[25px] text-[#000000]/40">
//                     {item?.content}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </section>
//   );
// };

// export default Info;

"use client";
import { pageInfo } from "@/app/common/data";
import {
  Bullhorn,
  Domain,
  DragDrop,
  Exposure,
  Forever,
  Responsive,
} from "../../__atoms";
import { usePathname } from "next/navigation";

const iconMap: Record<string, React.FC> = {
  bullhorn: Bullhorn,
  forever: Forever,
  responsive: Responsive,
  domain: Domain,
  exposure: Exposure,
  dragdrop: DragDrop,
};

const Info = () => {
  const path = usePathname() || "";
  const normalizeIconName = (str: string) => str.toLowerCase();
  const isFeaturesSectionPage = path.split("/")[1] === "features";

  // Use slice() to avoid mutating the original array
  const dataToRender = isFeaturesSectionPage ? pageInfo : pageInfo.slice(0, 4);

  return (
    <section className="w-full py-20 px-[8.8%] md:px-[20.18%] md:py-[120px] lg:px-[11.45%]        ">
      <div
        className={`${
          isFeaturesSectionPage
            ? "gap-[56px] md:gap-[72px]  lg:gap-[104px]"
            : "gap-[65px] md:gap-20 lg:gap-[30px] "
        } grid grid-cols-1 lg:grid-cols-3`}
      >
        {dataToRender &&
          dataToRender.map((item, i) => {
            if (!item?.iconName) return null;
            const iconKey = normalizeIconName(item.iconName);
            const Icon = iconMap[iconKey];
            return (
              <div
                key={i}
                className="flex flex-col gap-12 items-center text-center justify-between hover:scale-95 transition duration-300 cursor-pointer "
              >
                {Icon && <Icon />}
                <div className="DIV w-full flex flex-col gap-4 ">
                  <h2 className="font-bold text-[18px] leading-[25px] text-[#000000]">
                    {item?.subText}
                  </h2>
                  <p className="font-normal text-[15px] leading-[25px] text-[#000000]/40">
                    {item?.content}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Info;
