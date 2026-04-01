"use client";

import { useStoryblokBridge } from "@storyblok/react";

export function StoryblokBridge({ storyId }: { storyId?: number }) {
  useStoryblokBridge(storyId ?? 0, () => {
    // Bridge updates can trigger route refresh if needed.
  });

  return null;
}
