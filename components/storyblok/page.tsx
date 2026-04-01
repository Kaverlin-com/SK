import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

type PageProps = {
  blok: {
    body?: Array<Record<string, unknown>>;
  };
};

export function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)} className="space-y-6">
      {blok.body?.map((nestedBlok: Record<string, any>) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
