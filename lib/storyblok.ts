import {
  ISbStoriesParams,
  SbBlokData,
  StoryblokClient,
  apiPlugin,
  getStoryblokApi,
  storyblokInit
} from "@storyblok/react";
import { storyblokComponents } from "@/components/storyblok/component-map";

const token = process.env.STORYBLOK_TOKEN || process.env.STORYBLOK_ACCESS_TOKEN || "";

if (!token) {
  console.warn("Missing STORYBLOK_TOKEN");
}

storyblokInit({
  accessToken: token,
  use: [apiPlugin],
  components: storyblokComponents,
  apiOptions: {
    region: "us"
  }
});

export const getSbClient = (): StoryblokClient => getStoryblokApi();

export const getStory = async <T = SbBlokData>(
  slug: string,
  params: ISbStoriesParams = {}
): Promise<T | null> => {
  const sbApi = getSbClient();
  try {
    const { data } = await sbApi.get(`cdn/stories/${slug}`, {
      version: process.env.NODE_ENV === "production" ? "published" : "draft",
      resolve_relations: "featured_products.products,related_products.products",
      ...params
    });
    return data.story?.content ?? null;
  } catch {
    return null;
  }
};

export const getStories = async (startsWith: string) => {
  const sbApi = getSbClient();
  const { data } = await sbApi.get("cdn/stories", {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    starts_with: startsWith,
    per_page: 50
  });
  return data.stories;
};
