import Image from "next/image";
import { Burger } from "../../__atoms";

const Nav = () => {
  return (
    <div className="w-full px-6 md:px-[39px] lg:px-[165px] py-[28px] md:py-4 flex items-center justify-between">
      <div className="w-[170px] h-[16px]">
        <Image src={"/assets/logo.jpg"} alt={"Logo"} width={170} height={16} />
      </div>

      <div className="items-center gap-[37px] hidden md:flex">
        <h4 className="heading-h4 uppercase">stories</h4>
        <h4 className="heading-h4 uppercase">feature</h4>
        <h4 className="heading-h4 uppercase">pricing</h4>
      </div>

      <div className="">
        <button className="text-[12px] uppercase text-white bg-black py-3 px-6 tracking-[2px] hidden sm:flex">
          get an invite
        </button>
        <Burger />
      </div>
    </div>
  );
};

export default Nav;
