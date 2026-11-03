import { PageHero, Section, Cards } from '@/components/ui';
import { EARLY_ACCESS } from '@/lib/site';

export const metadata = {
  title: 'Companion app',
  description: 'The USDK companion app lets people approve or decline payments their AI agents want to make.',
  alternates: { canonical: '/app' },
};

export default function CompanionApp() {
  return (
    <>
      <PageHero
        eyebrow="Companion app"
        title="Approve your agents’ payments from your phone"
        lede="When an agent wants to make a payment above the limit you set, the USDK companion app asks you first. One tap to approve, one tap to decline."
        primary={{ label: 'Get early access', href: EARLY_ACCESS }}
      />
      <Section alt>
        <Cards
          items={[
            { title: 'See what it wants to buy', body: 'The amount, the merchant and the reason the agent gave.' },
            { title: 'Decide in a tap', body: 'Approve or decline, and the agent carries on or stops.' },
            { title: 'Keep a history', body: 'Every decision is saved next to the payment it decided.' },
          ]}
        />
        <p className="muted" style={{ marginTop: 24 }}>The companion app opens alongside early access.</p>
      </Section>
    </>
  );
}
