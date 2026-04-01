import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ImageText({ blok }: { blok: any }) {
  return (
    <Section>
      <Container {...storyblokEditable(blok)}>
        <div className="grid items-center gap-8 rounded-soft bg-sage/40 p-8 md:grid-cols-2 md:p-12">
          <div className="relative h-80 overflow-hidden rounded-soft">
            <Image
              src={blok.image?.filename || "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"}
              alt={blok.image?.alt || "Founder preparing skincare formula"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">Brand story</p>
            <h3 className="mt-3 text-3xl font-semibold">{blok.title ?? "Formulated for balance, built for real life."}</h3>
            <p className="mt-4 text-charcoal/70">{blok.content ?? "We combine modern dermatological research with minimalist rituals."}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
