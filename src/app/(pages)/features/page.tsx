import {
  FeaturesSection,
  Info,
  InviteBanner,
} from "@/app/components/__organism";
import React from "react";

export default function page() {
  return (
    <section className="w-full flex flex-col min-h-screen     ">
      <FeaturesSection />
      <Info />
      <InviteBanner />
    </section>
  );
}
