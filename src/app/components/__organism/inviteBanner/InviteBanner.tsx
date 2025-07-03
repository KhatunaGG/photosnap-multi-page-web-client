import Image from "next/image";
import { ArrowRight } from "../../__atoms";

const InviteBanner = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col relative">
        <div className="relative w-full h-[288px] md:h-[280px]">
          <Image
            src={"/assets/invite.jpg"}
            alt={"Invite image"}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between gap-6 md:px-[5.07%] px-[8.8%] lg:px-[11.45%] text-white">
          <h2 className="font-bold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] md:tracking-[4.17px] tracking-[3.33px] uppercase md:w-[400px]">
            We’re in beta. Get your invite today!
          </h2>
          <div className="flex flex-row gap-4">
            <p className="text-xs font-bold tracking-[2px] uppercase hover:text-white/40 hover:scale-105 transition-colors duration-300 ease-out ">
              GET AN INVITE
            </p>
            <ArrowRight textColor="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteBanner;
