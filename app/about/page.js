import { PageHero, Section } from '@/components/ui';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'About',
  description: 'USDK is building programmable dollar infrastructure for AI agents.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Dollars that agents can use safely"
        lede="AI agents are starting to act for people and businesses. Sooner or later, they need to pay for things. USDK exists so they can, within rules people set."
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
        secondary={{ label: 'Contact us', href: '/contact' }}
      />
      <Section alt>
        <div className="prose">
          <h2>What we believe</h2>
          <ul>
            <li>Agents should only spend within limits a person or business wrote down.</li>
            <li>A person should be one tap away from any payment that matters.</li>
            <li>Every payment should say which agent made it, for whom and why.</li>
            <li>Developers should get all of this from one small API, on whichever dollar rail fits.</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
