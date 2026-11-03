import { PageHero, Section, Cards } from '@/components/ui';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Security',
  description: 'How USDK is designed to keep agent payments in bounds: scoped keys, policy checks, human approvals and a full record.',
  alternates: { canonical: '/security' },
};

export default function Security() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Designed so agents stay in bounds"
        lede="Letting software spend money only works if the limits hold. These are the principles USDK is built on."
      />
      <Section alt>
        <Cards
          items={[
            { title: 'Scoped per agent', body: 'Each agent has its own wallet and policy, so one agent can never spend another agent’s budget.' },
            { title: 'Policy before payment', body: 'Every payment is checked against its policy before money moves. A prompt cannot talk its way past a limit.' },
            { title: 'Humans for big decisions', body: 'Payments above your threshold wait for a person to approve them.' },
            { title: 'A full record', body: 'Every request, decision and approval is logged with the payment it belongs to.' },
          ]}
        />
      </Section>
      <Section title="Report a security issue">
        <p className="narrow">
          If you think you have found a security issue, email <a href={`mailto:${CONTACT_EMAIL}?subject=Security`}>{CONTACT_EMAIL}</a> with
          “Security” in the subject. Please don’t share details publicly until we’ve had a chance to respond.
        </p>
      </Section>
    </>
  );
}
