export type ArrowRightPropsType = {
  textColor?: string;
};

export type BadgePropsType = {
  title: string;
  subText: string;
  date?: string;
};

export type CompareDataType = {
  feature: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
};

// export type SectionDataType = {
//   id: string;
//   bgColor: string;
//   textColor: string;
//   content: {
//     title: string;
//     description: string;
//     cta: string;
//   };
//   images: {
//     src: string;
//     alt: string;
//   }[];
//   textOrder: string;
//   imageOrder: string;
// }[];

export type GalleryItemPropsType = {
  id: string;
  bgColor: string;
  textColor: string;
  content: {
    title: string;
    description: string;
    cta: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  textOrder: string;
  imageOrder: string;
  isFeaturesSectionPage?: boolean;
  isPricingPage?: boolean;
};

export type FadeSwiperProps = {
  images: { src: string; alt?: string }[];
  speed?: number;
  delay?: number;
  className?: string;
};

export type sliderDataType = {
  title: string;
  subText: string;
  src: string;
}[];

// export type PlanTheme = "light" | "dark" | "gradient";

// export interface PlanData {
//   id: string;
//   title: string;
//   description: string;
//   priceMonthly: string;
//   billing: string;
//   perYear: string;
//   priceYearly: string;
// }
