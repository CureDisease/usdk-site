import { notFound } from 'next/navigation';
import { PageHero, Section, Cards, CtaBand } from '@/components/ui';
import { PRODUCTS, EARLY_ACCESS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PRODUCTS[slug];
  if (!p) return {};
  return { title: p.title, description: p.lede, alternates: { canonical: `/product/${slug}` } };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const p = PRODUCTS[slug];
  if (!p) notFound();
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        lede={p.lede}
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'Read the docs', href: '/docs' }}
      />
      <Section alt>
        <Cards items={p.features} />
      </Section>
      <CtaBand
        title="See how it fits together"
        body="Payments, controls, identity and approvals share one API and one record of every payment."
        primary={{ label: 'Explore the product', href: '/product' }}
        secondary={{ label: 'Core concepts', href: '/docs/concepts' }}
      />
    </>
  );
}
