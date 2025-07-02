import Image from "next/image";
import React from "react";
import { ArrowRight } from "../../__atoms";

const StoriesSection = () => {
  return (
    <section className="w-full bg-yellow-100">
      <div className="flex flex-col md:relative w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-74px)]">
        <div className="  relative w-full h-[317px] md:h-[650px] lg:min-h-[calc(100vh-74px)]">
          <Image
            src="/assets/stories_banner.jpg"
            alt="Stories Banner"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        <div
          className="
          h-full md:h-[650px] lg:min-h-[calc(100vh-74px)]
          bg-black md:bg-transparent 
          text-white 
          py-[48px] 
          px-[8%] md:pl-[5.07%] lg:pl-[7.77%]
          flex flex-col justify-center
          md:absolute md:top-0 md:z-10
          gap-6
        "
        >
          <h2 className="font-bold text-xs tracking-[2px]">
            LAST MONTH&quot;S FEATURED STORY
          </h2>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold w-[9ch] text-[32px] md:text-[40px] tracking-[4.17px] leading-[48px]">
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <p className="text-[13px] font-normal">
              <span className="text-white/50">March 2nd 2020 </span>
              by John Appleseed
            </p>
          </div>

          <p className="font-normal text-[15px] leading-[25px] text-white/50 max-w-[400px]">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &quot;mountains&quot;, especially in
            eastern Kentucky and West Virginia, and while the ridges are not
            high, the terrain is extremely rugged.
          </p>

          <div className="flex flex-row gap-4">
            <p className="text-xs font-bold tracking-[2px] uppercase hover:text-white/40 hover:scale-105 transition-colors duration-300 ease-out">
              READ THE STORY
            </p>
            <ArrowRight textColor="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
