import { storyGalleryData } from "@/app/common/data";
import Image from "next/image";
import { Badge } from "../../__molecules";

const StoryGallery = () => {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {storyGalleryData.map((item, i) => {
        const isFirst = i === 0;
        return (
          <div key={i} className="relative w-full h-[375px] md:h-[500px]">
            <Image
              src={`/assets/${item.src}`}
              alt={item.title}
              fill
              className="object-cover"
              priority={isFirst}
              quality={90}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
            <Badge title={item.title} subText={item.subText} date={item.date} />
          </div>
        );
      })}
    </section>
  );
};

export default StoryGallery;
