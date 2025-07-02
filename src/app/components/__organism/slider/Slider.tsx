import Image from "next/image";
import { Badge } from "../../__molecules";
import { sliderData } from "@/app/common/data";

export type sliderDataType = {
  title: string;
  subText: string;
  src: string;
}[];

const Slider = () => {
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden">
        {sliderData.map((item, i) => (
          <div key={i} className="relative w-full h-[375px] md:h-[500px]">
            <Image
              src={`/assets/${item.src}`}
              alt={`Bitmap ${i + 1}`}
              fill
              sizes="(max-width: 768px) 375px, (max-width: 1024px) 389px"
              className="object-cover"
              priority={i < 2}
            />
            <Badge subText={item.subText} title={item.title} />
          </div>
        ))}
      </div>

      <div className="hidden lg:block overflow-hidden h-[500px]">
        <div className="flex lg:animate-loop-scroll">
          {[...sliderData, ...sliderData].map((item, i) => (
            <div key={i} className="relative flex-shrink-0 w-[360px] h-[500px]">
              <Image
                src={`/assets/${item.src}`}
                alt={item.title}
                fill
                sizes="360px"
                className="object-cover"
                priority={i < sliderData.length}
              />
              <Badge subText={item.subText} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
