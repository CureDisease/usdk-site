import { notFound } from 'next/navigation';
import { PageHero, Section, Cards, CtaBand } from '@/components/ui';
import { SOLUTIONS, EARLY_ACCESS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = SOLUTIONS[slug];
  if (!s) return {};
  return { title: s.title, description: s.lede, alternates: { canonical: `/solutions/${slug}` } };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const s = SOLUTIONS[slug];
  if (!s) notFound();
  return (
    <>
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        lede={s.lede}
        primary={s.cta}
        secondary={{ label: 'Read the docs', href: '/docs' }}
      />
      <Section alt>
        <Cards items={s.points} />
      </Section>
      <CtaBand
        title="Let your agents pay. On your terms."
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'See the product', href: '/product' }}
      />
    </>
  );
}
