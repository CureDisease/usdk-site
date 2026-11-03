import Link from 'next/link';

export default function DocsLayout({ children }) {
  return (
    <div className="wrap docs-layout">
      <nav className="docs-nav" aria-label="Docs">
        <p>Get started</p>
        <Link href="/docs">What is USDK</Link>
        <Link href="/docs/quickstart">Quickstart</Link>
        <Link href="/docs/concepts">Core concepts</Link>
        <p>Guides</p>
        <Link href="/docs/guides/accept-payments">Accept payments from agents</Link>
        <p>Reference</p>
        <span className="muted small">API reference and SDKs open with early access.</span>
      </nav>
      <div className="prose">{children}</div>
    </div>
  );
}
