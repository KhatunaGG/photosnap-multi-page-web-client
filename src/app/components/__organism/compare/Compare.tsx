import CompareItem from "../compareItem/CompareItem";
import CompareHeader from "../compareHeader/CompareHeader";
import { compareData } from "@/app/common/data";
import { CompareDataType } from "@/app/interfaces/interfaces";

const Compare = () => {
  return (
    <div className="w-full  ">
      <div className="w-full px-[7.73%] md:px-[5.20%] lg:px-[24.65%] flex flex-col items-center justify-center md:gap-[64px] lg:gap-[56px] pb-[64px] md:pb-[112px] lg:pb-[160px]">
        <h2 className="hidden md:flex uppercase font-bold text-[40px] leading-[48px] tracking-[4.17px]">
          Compare
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-row items-center justify-between  pb-[23px] border-b border-b-black">
            <h3 className="w-full md:w-[269px]  text-xs font bold uppercase tracking-[2px] ">
              THE FEATURES
            </h3>
            <div className="hidden md:flex flex-1">
              <CompareHeader />
            </div>
          </div>
          {compareData.map((item: CompareDataType, i) => (
            <CompareItem
              key={i}
              feature={item.feature}
              basic={item.basic}
              pro={item.pro}
              business={item.business}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
