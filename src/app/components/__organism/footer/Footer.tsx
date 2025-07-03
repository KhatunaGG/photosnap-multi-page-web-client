import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Logo,
  Pinterest,
  Twitter,
  Youtube,
} from "../../__atoms";

const iconMap: Record<string, React.FC> = {
  pinterest: Pinterest,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
  instagram: Instagram,
};

const Footer = () => {
  return (
    <section className="w-full lg:px-[11.87%] px-[8.8%] py-[56px] md:py-[64px] md:px-[5.20%] bg-[#000000] text-white">
      <div className="w-full text-center flex flex-col md:flex-row md:items-stretch md:justify-center gap-[119px] md:gap-0          ">
        <div className="w-full md:flex-1">
          <div className=" h-full flex  flex-col items-center md:items-start   md:gap-8 ">
            <div className="w-full h-full  flex flex-col gap-[49px]     lg:flex-row lg:gap-[109px]">
              <div className=" w-full items-center md:items-start md:w-auto flex flex-col gap-8 md:gap-0 justify-between">
                <Logo />
                <div className="w-full md:w-fit flex md:hidden lg:flex h-8 items-center justify-center gap-4">
                  {Object.entries(iconMap).map(([key, IconComponent]) => (
                    <Link
                      href={"#"}
                      className="cursor-pointer hover:scale-105 transition-colors duration-300 ease-out "
                      key={key}
                    >
                      <IconComponent key={key} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="  w-full md:w-auto flex flex-col gap-[19px] md:flex-row md:gap-[26px] lg:flex-col lg:gap-[19px]">
                {["home", "stories", "features", "pricing"].map((item, i) => (
                  <p
                    className="text-xs md:text-sm font-bold translate-[2px] uppercase cursor-pointer hover:text-white/40 hover:scale-105 transition-colors duration-300 ease-out "
                    key={i}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="hidden md:flex lg:hidden h-8 gap-4 ">
                {Object.entries(iconMap).map(([key, IconComponent]) => (
                  <Link
                    href={"#"}
                    className="cursor-pointer hover:scale-105 transition-colors duration-300 ease-out "
                    key={key}
                  >
                    <IconComponent key={key} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="DIV2  w-full  md:flex-1 ">
          <div className="w-full h-full flex flex-col gap-[34px] md:gap-0 items-center justify-between md:items-end ">
            <div className="flex flex-row items-center gap-4">
              <p className="font-bold text-xs tracking-[2px] cursor-pointer hover:text-white/40 hover:scale-105 transition-colors duration-300 ease-out ">
                GET AN INVITE
              </p>
              <ArrowRight textColor="text-white" />
            </div>
            <p className="font-normal text-[15px] text-white/40">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
