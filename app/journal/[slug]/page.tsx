import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const runtime = "edge";

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ");
  return (
    <Section>
      <Container className="max-w-3xl">
        <article className="prose prose-neutral max-w-none">
          <h1 className="capitalize">{title}</h1>
          <p>
            Modern skincare works best when it remains consistent, simple, and adapted to your skin barrier.
            Start with cleansing, hydrate deeply, and use targeted treatments with patience.
          </p>
          <p>
            We recommend introducing one active ingredient at a time and tracking your skin response over two weeks.
          </p>
        </article>
      </Container>
    </Section>
  );
}
