import { StoriesSection, StoryGallery } from "@/app/components/__organism";
import React from "react";

export default function Page() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <StoriesSection />
      <StoryGallery />
    </div>
  );
}
