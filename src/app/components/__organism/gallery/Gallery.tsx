import { sections } from "@/app/common/data";
import GalleryItem from "../galleryItem/GalleryItem";

const Gallery = () => {
  const homePageSections = sections.filter(
    (item) =>
      item.content.title !== "features" && item.content.title !== "pricing"
  );

  return (
    <>
      {homePageSections.map((section) => (
        <GalleryItem key={section.id} {...section} />
      ))}
    </>
  );
};

export default Gallery;
