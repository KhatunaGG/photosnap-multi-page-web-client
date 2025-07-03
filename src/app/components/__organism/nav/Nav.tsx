"use client";
import Image from "next/image";
import { Burger } from "../../__atoms";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const navItems = ["stories", "features", "pricing"];

  return (
    <div className="w-full px-6 md:px-[39px] lg:px-[165px] py-[28px] md:py-4 flex items-center justify-between">
      <Link className="w-[170px] h-[16px]" href={"/"}>
        <Image src={"/assets/logo.jpg"} alt={"Logo"} width={170} height={16} />
      </Link>

      <div className="items-center gap-[37px] hidden md:flex cursor-pointer">
        {navItems.map((item, i) => {
          const isActive = pathname === `/${item}`;
          return (
            <Link key={i} href={`/${item}`}>
              <h4
                className={`${
                  isActive ? "font-semibold text-black/40" : ""
                } heading-h4 uppercase hover:text-black/40 hover:scale-105 transition-colors duration-300 ease-out`}
              >
                {item}
              </h4>
            </Link>
          );
        })}
      </div>

      <div>
        <button className="text-[12px] uppercase text-white bg-black py-3 px-6 tracking-[2px] hidden sm:flex hover:bg-[#DFDFDF] hover:text-black/70 transition-colors duration-300 ease-in-out">
          get an invite
        </button>
        <Burger />
      </div>
    </div>
  );
};

export default Nav;
