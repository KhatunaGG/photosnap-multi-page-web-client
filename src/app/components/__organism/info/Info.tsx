import { pageInfo } from "@/app/common/data";
import { Bullhorn, Forever, Responsive } from "../../__atoms";

const iconMap: Record<string, React.FC> = {
  bullhorn: Bullhorn,
  forever: Forever,
  responsive: Responsive,
};

const Info = () => {
  const normalizeIconName = (str: string) => str.toLowerCase();
  return (
    <section className="w-full py-20 px-[8.8%] md:px-[20.18%] md:py-[120px] lg:px-[11.45%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[65px] md:gap-20 lg:gap-[30px]">
        {pageInfo &&
          pageInfo.map((item, i) => {
            if (!item?.iconName) return null;
            const iconKey = normalizeIconName(item.iconName);
            const Icon = iconMap[iconKey];
            return (
              <div
                key={i}
                className="flex flex-col gap-12 items-center text-center justify-between"
              >
                {Icon && <Icon />}
                <div className="DIV w-full flex flex-col gap-4 ">
                  <h2 className="font-bold text-[18px] leading-[25px] text-[#000000]">
                    {item?.subText}
                  </h2>
                  <p className="font-normal text-[15px] leading-[25px] text-[#000000]/40">
                    {item?.content}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Info;
