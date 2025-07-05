import CompareHeader from "../compareHeader/CompareHeader";
import { CheckIcon } from "../../__atoms";
import { CompareDataType } from "@/app/interfaces/interfaces";

const CompareItem = ({ feature, basic, pro, business }: CompareDataType) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between py-[23px] border-b border-b-[#DFDFDF]">
      <h3 className="w-full md:w-[269px]  text-xs font bold uppercase tracking-[2px] mb-4 md:mb-0">
        {feature}
      </h3>

      <div className="w-full  md:hidden  mb-1 md:mb-0">
        <CompareHeader />
      </div>

      <div className="w-full md:flex-1 flex flex-row items-center justify-between">
        <div className="w-full md:flex-1 text-xs font bold uppercase tracking-[2px]  text-center  flex items-center justify-center">
          {basic && <CheckIcon />}
        </div>
        <div className="w-full md:flex-1 text-xs font bold uppercase tracking-[2px]  text-center  flex items-center justify-center">
          {pro && <CheckIcon />}
        </div>
        <div className="w-full md:flex-1 text-xs font bold uppercase tracking-[2px] text-center  flex items-center justify-center">
          {business && <CheckIcon />}
        </div>
      </div>
    </div>
  );
};

export default CompareItem;
