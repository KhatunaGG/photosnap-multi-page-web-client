import React from "react";
import { ArrowRight } from "../../__atoms";

export type BadgePropsType = {
  title: string;
  subText: string;
  date?: string;
};

const Badge = ({ title, subText, date }: BadgePropsType) => {
  return (
    <div className="w-full absolute bottom-10 left-0 right-0 z-10 px-8 md:px-10 flex flex-col gap-[20px] cursor-pointer">
      <div className="w-full flex items-start flex-col text-white gap-1 pb-4 border-b border-b-[#fff]/30">
        {date ? <p className="font-normal text-[13px]">{date}</p> : ""}
        <h2 className="font-bold text-[18px] leading-[25px]">{title}</h2>
        <p className="font-normal text-[13px]">{subText}</p>
      </div>
      <div className="w-full flex items-center justify-between text-white">
        <p className="text-xs font-bold tracking-[2px] uppercase">read story</p>
        <ArrowRight textColor="text-white" />
      </div>
    </div>
  );
};

export default Badge;
