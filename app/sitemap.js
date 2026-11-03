import { SITE_URL, PRODUCTS, SOLUTIONS } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const paths = [
    '/', '/product', '/developers', '/pricing', '/security', '/learn', '/learn/agentic-payments',
    '/learn/glossary', '/docs', '/docs/quickstart', '/docs/concepts', '/docs/guides/accept-payments',
    '/app', '/about', '/contact',
    ...Object.keys(PRODUCTS).map((s) => `/product/${s}`),
    ...Object.keys(SOLUTIONS).map((s) => `/solutions/${s}`),
  ];
  return paths.map((p) => ({ url: `${SITE_URL}${p === '/' ? '' : p}`, changeFrequency: 'weekly' }));
}
