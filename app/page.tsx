import { StoryblokComponent } from "@storyblok/react";
import { getStory } from "@/lib/storyblok";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const fallback = {
  component: "page",
  body: [
    { component: "hero" },
    { component: "product_grid" },
    { component: "image_text" },
    { component: "testimonial" },
    { component: "cta_banner" }
  ]
};

export default async function HomePage() {
  const content = (await getStory("home")) || fallback;

  return (
    <>
      <StoryblokComponent blok={content as Record<string, unknown>} />
      <Section>
        <Container>
          <div className="grid gap-6 rounded-soft bg-white p-8 shadow-soft md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-charcoal/60">Press</p>
              <p className="mt-2">Featured by Derm Journal, Well Daily, and Calm Edit.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-charcoal/60">Newsletter</p>
              <p className="mt-2">Get routines, ingredient science, and launch access.</p>
            </div>
            <form className="flex items-center gap-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" type="email" placeholder="Email address" className="focus-ring w-full rounded-full border border-charcoal/15 bg-cream px-4 py-3" />
              <Button>Join</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
