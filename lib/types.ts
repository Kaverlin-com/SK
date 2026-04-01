import { SbBlokData } from "@storyblok/react";

export type StoryblokImage = {
  filename: string;
  alt?: string;
};

export type HeroBlock = SbBlokData & {
  component: "hero";
  title: string;
  subtitle: string;
  cta_label: string;
  cta_link: string;
  media?: StoryblokImage;
};
