import { PageHero } from '@/components/ui';

export default function NotFound() {
  return (
    <PageHero
      title="Page not found"
      lede="That page doesn’t exist. Try the homepage or the docs."
      primary={{ label: 'Go home', href: '/' }}
      secondary={{ label: 'Read the docs', href: '/docs' }}
    />
  );
}
