"use client";

import { sections } from "@/app/common/data";
import { usePathname } from "next/navigation";
import GalleryItem from "../galleryItem/GalleryItem";

const PricingSection = () => {
  const path = usePathname();
  const isPricingPage = path === "/pricing";
  const pricingData = sections.find((item) => item.content.title === "pricing");
  return (
    <section>
      {pricingData && (
        <GalleryItem {...pricingData} isPricingPage={isPricingPage} />
      )}
    </section>
  );
};

export default PricingSection;
