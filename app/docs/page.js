import Link from 'next/link';

export const metadata = {
  title: 'Docs',
  description: 'What USDK is, how it works and where to start building agent payments.',
  alternates: { canonical: '/docs' },
};

export default function DocsHome() {
  return (
    <>
      <p className="notice">These docs are a preview. The API is in early access, and names and fields may change before general availability.</p>
      <h1>What is USDK</h1>
      <p>
        USDK is programmable dollar infrastructure for AI agents. It gives an agent a dollar wallet, checks every
        payment against a policy you write, can send larger payments to a person for approval, and records who the
        agent acts for and why each payment was made.
      </p>
      <p>
        USDK does not issue its own stablecoin. It is built to be issuer-neutral, so the dollar rail underneath can
        change without your integration changing.
      </p>
      <h2>Where to start</h2>
      <ul>
        <li><Link href="/docs/quickstart">Quickstart</Link>: the path from sandbox key to a first test payment.</li>
        <li><Link href="/docs/concepts">Core concepts</Link>: agents, wallets, policies, approvals, identity and settlement.</li>
        <li><Link href="/docs/guides/accept-payments">Accept payments from agents</Link>: the merchant side of the network.</li>
      </ul>
      <h2>Coming with early access</h2>
      <ul>
        <li>Guides for budgets, approvals, identity checks, webhooks and reconciliation</li>
        <li>The full API reference</li>
        <li>TypeScript and Python SDKs, and an MCP server for agent tool use</li>
      </ul>
    </>
  );
}
