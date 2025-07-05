"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FadeSwiperProps } from "@/app/interfaces/interfaces";

const FadeSwiper = ({
  images,
  speed = 2000,
  delay = 5000,
  className = "",
}: FadeSwiperProps) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      spaceBetween={0}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      loop={images.length > 1}
      speed={speed}
      className={`w-full h-full ${className}`}
    >
      {images
        .filter((img) => img.src && img.src.trim() !== "")
        .map((img, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            <Image
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              fill
              priority
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default FadeSwiper;
