"use client";
import { usePathname } from "next/navigation";
import { sections } from "@/app/common/data";
import GalleryItem from "../galleryItem/GalleryItem";

const FeaturesSection = () => {
  const path = usePathname();
  const isFeaturesSectionPage = path === "/features";

  const featuresData = sections.find(
    (item) => item.content.title.toLowerCase() === "features"
  );

  return (
    <div className="w-full">
      {featuresData && (
        <GalleryItem
          {...featuresData}
          isFeaturesSectionPage={isFeaturesSectionPage}
        />
      )}

    
    </div>
  );
};

export default FeaturesSection;


