import Link from 'next/link';

export const metadata = {
  title: 'Agentic payments glossary',
  description: 'Definitions of agentic payments terms: AI agent wallet, spend policy, human-in-the-loop approval, know your agent and more.',
  alternates: { canonical: '/learn/glossary' },
};

const terms = [
  ['Agentic commerce', 'Buying and selling where AI agents act for people or businesses: finding products, deciding and paying.'],
  ['Agentic payment', 'A payment where an AI agent, not a person, makes the final decision to send it, within rules its owner set.'],
  ['AI agent', 'Software that takes actions toward a goal on someone’s behalf, such as booking, buying or replying.'],
  ['Agent wallet', 'A balance that belongs to one agent, so its spending is separate and traceable.'],
  ['Allowlist', 'A list of merchants or categories an agent is allowed to pay. Anything not on it is declined.'],
  ['Approval threshold', 'The amount, or other condition, above which a payment waits for a person to approve it.'],
  ['Human in the loop', 'A design where a person must approve certain actions before an agent can complete them.'],
  ['Issuer-neutral', 'Not tied to a single stablecoin or money issuer, so the rail underneath can change without the integration changing.'],
  ['Know your agent', 'Verifying the person or business an agent acts for, so a merchant knows who it is dealing with.'],
  ['MCP', 'Model Context Protocol, an open way for AI models to call tools. A payments tool exposed over MCP lets an agent pay as one of its actions.'],
  ['Principal', 'The person or business an agent acts for and whose money it spends.'],
  ['Programmable dollars', 'Dollar balances that software can move under rules written in code, such as limits and approvals.'],
  ['Spend policy', 'The rules an agent spends by: limits, budgets, allowlists, per-payment caps and approval thresholds.'],
  ['Stablecoin', 'A digital token designed to hold a steady value against a currency such as the US dollar.'],
];

export default function Glossary() {
  return (
    <div className="wrap" style={{ padding: '56px 20px 80px' }}>
      <div className="prose">
        <p className="eyebrow">Glossary</p>
        <h1>Agentic payments glossary</h1>
        <p className="lede">Short definitions of the terms that come up when AI agents start to pay. For the full picture, read <Link href="/learn/agentic-payments">the complete guide</Link>.</p>
        <dl>
          {terms.map(([t, d]) => (
            <div key={t} id={t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
