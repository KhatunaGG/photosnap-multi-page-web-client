import {
  Compare,
  InviteBanner,
  PricingSection,
  TogglePrice,
} from "@/app/components/__organism";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <PricingSection />
      <TogglePrice />
      <Compare />
      <InviteBanner />
    </div>
  );
};

export default page;
