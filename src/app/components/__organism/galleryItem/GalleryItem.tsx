"use client";
import { GalleryItemPropsType } from "@/app/interfaces/interfaces";
import { ArrowRight } from "../../__atoms";
import HomeSwiper from "../homeSwiper/HomeSwiper";

const GalleryItem: React.FC<GalleryItemPropsType> = ({
  id,
  bgColor,
  textColor,
  content,
  images,
  textOrder,
  imageOrder,
  isFeaturesSectionPage,
  isPricingPage,
}) => {
  return (
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
              textColor === "text-white" ? "text-white/60" : "text-black/40"
            }`}
          >
            {content.description}
          </p>
        </div>
        {!isFeaturesSectionPage && !isPricingPage && (
          <div className="flex gap-[18px]">
            <h4
              className={`uppercase heading-h4 cursor-pointer transition-colors duration-300 ease-out hover:scale-105 ${
                bgColor === "bg-black"
                  ? "hover:text-white/40"
                  : "hover:text-black/70"
              }`}
            >
              {content.cta}
            </h4>
            <ArrowRight textColor={textColor} />
          </div>
        )}
      </div>

      <div
        className={`w-full md:flex-1 relative min-h-[430px] md:min-h-0 ${imageOrder}`}
      >
        <div className="absolute inset-0">
          <HomeSwiper images={images} />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
