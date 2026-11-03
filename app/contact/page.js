import { PageHero, Section, Cards } from '@/components/ui';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Get early access',
  description: 'Request early access to USDK or talk to us about agent payments for your platform or company.',
  alternates: { canonical: '/contact' },
};

const mail = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Early access"
        title="Get early access to USDK"
        lede="USDK is opening to developers and companies in stages. Tell us what you’re building and we’ll be in touch."
      />
      <Section alt>
        <Cards
          items={[
            { title: 'Developers', body: 'Building an agent that needs to pay? Tell us about it and what it buys.', href: mail('Early access: developer'), linkLabel: 'Request access' },
            { title: 'Platforms', body: 'Run an agent framework or model platform? Let’s talk about payments for your users’ agents.', href: mail('Platform enquiry'), linkLabel: 'Talk to us' },
            { title: 'Enterprises', body: 'Want internal agents to spend within company policy? Talk to sales.', href: mail('Sales enquiry'), linkLabel: 'Talk to sales' },
            { title: 'Merchants', body: 'Want to accept payments from agents? Ask about merchant access.', href: mail('Merchant access'), linkLabel: 'Ask about access' },
          ]}
        />
        <p className="muted" style={{ marginTop: 24 }}>
          Or write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </Section>
    </>
  );
}
