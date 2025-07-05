"use client";
import { plans } from "@/app/common/data";
import { useState } from "react";


const TogglePrice = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsYearly(checked);
  };

  return (
    <section className="w-full flex flex-col gap-10 lg:gap-12  px-[8.8%] md:px-[5.07%]  lg:px-[11.45%] py-[64px] md:py-[112px] lg:pt-[120px] lgLpb-[160px]">
      <div className="w-full flex items-center justify-center  gap-8 ">
        <p className="font-bold text-[18px] leading-[25px] text-black">
          Monthly
        </p>
        {/* <Switch checked={isYearly} onCheckedChange={handleSwitchChange} /> */}
        <p className="font-bold text-[18px] leading-[25px] text-black">
          Yearly
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px]">
        {plans.map((plan, i) => {
          const isOddIndex = i % 2 !== 0;
          const price = isYearly ? plan.priceYearly : plan.priceMonthly;
          const billing = isYearly ? plan.perYear : plan.billing;
          return (
            <div
              className={`${
                isOddIndex
                  ? " bg-black my-0 relative"
                  : " bg-[#F5F5F5] my-[31.5px] flex"
              } w-full flex items-center justify-center pt-[96px] pb-[71px] `}
              key={i}
            >
              <div
                key={i}
                className={` DIV_1  w-full   flex flex-col items-center justify-center gap-10`}
              >
                <div
                  className={`${
                    isOddIndex ? "" : ""
                  } w-full flex flex-col gap-6 lg:gap-[30px] items-center justify-center px-[22px] md:flex-row md:items-start md:justify-start lg:flex-col lg:items-center lg:justify-center`}
                >
                  <div
                    className={`${
                      isOddIndex ? "" : " "
                    } w-full lg:flex-1 lg:w-full flex flex-col gap-[18px] items-center justify-center  md:w-1/2 md:items-start md:justify-start lg:items-center lg:justify-center `}
                  >
                    <h2
                      className={`${
                        isOddIndex ? "text-white " : "text-black"
                      } font-bold text-[24px] leading-[25px]`}
                    >
                      {plan.title}
                    </h2>
                    <p
                      className={`${
                        isOddIndex ? "text-white/60" : "text-black/60 "
                      } text-[15px] font-normal leading-[25px]  text-center md:text-left lg:text-center`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="w-full md:flex-1 lg:w-full flex flex-col items-center justify-center   ">
                    <h1
                      className={`${
                        isOddIndex ? "text-white" : "text-black"
                      } font-bold text-black text-[40px] leading-[48px] tracking-[4.17px]`}
                    >
                      ${price}
                    </h1>
                    <p
                      className={`${
                        isOddIndex ? "text-white/60" : "text-black/60 "
                      } text-[15px] font-normal leading-[25px] `}
                    >
                      {billing}
                    </p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center      px-[15px]  lg:px-[15px] md:items-start md:justify-start md:px-0 md:pr-[50%] ">
                  <button
                    className={`${
                      isOddIndex ? "text-black bg-white" : "text-white bg-black"
                    } font-bold  text-xs tracking-[2px]  py-[12.5px] w-full px-[15px] hover:scale-105 transition duration-300 ease-in-out`}
                  >
                    PICK PLAN
                  </button>
                </div>
              </div>

              {isOddIndex && (
                <div className="absolute top-0 left-0 right-0 w-full h-[6px] bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF]"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TogglePrice;
