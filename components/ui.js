import Link from 'next/link';
import { NAV, FOOTER, EARLY_ACCESS } from '@/lib/site';

export function Banner() {
  return (
    <div className="banner">
      USDK is in early access. <Link href={EARLY_ACCESS}>Request access</Link>
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="USDK home">
          USDK
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) =>
            item.items ? (
              <div className="nav-group" key={item.label}>
                <button className="nav-link" type="button" aria-haspopup="true">
                  {item.label}
                </button>
                <div className="nav-menu">
                  {item.items.map((sub) => (
                    <Link key={sub.href} href={sub.href}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="header-cta">
          <Link href={EARLY_ACCESS} className="btn btn-primary btn-sm">
            Get early access
          </Link>
        </div>
        <details className="mobile-nav">
          <summary aria-label="Menu">Menu</summary>
          <div className="mobile-menu">
            {NAV.map((item) =>
              item.items ? (
                <div key={item.label}>
                  <p className="mobile-heading">{item.label}</p>
                  {item.items.map((sub) => (
                    <Link key={sub.href} href={sub.href}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
            <Link href={EARLY_ACCESS} className="btn btn-primary">
              Get early access
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="logo">USDK</p>
          <p className="muted small">Programmable dollars for AI agents.</p>
        </div>
        {FOOTER.map((col) => (
          <div key={col.title}>
            <p className="footer-title">{col.title}</p>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="wrap footer-base muted small">© {new Date().getFullYear()} USDK</div>
    </footer>
  );
}

export function Buttons({ primary, secondary }) {
  return (
    <div className="buttons">
      {primary && (
        <Link href={primary.href} className="btn btn-primary">
          {primary.label}
        </Link>
      )}
      {secondary && (
        <Link href={secondary.href} className="btn btn-ghost">
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, lede, primary, secondary }) {
  return (
    <section className="page-hero">
      <div className="wrap narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        <Buttons primary={primary} secondary={secondary} />
      </div>
    </section>
  );
}

export function Section({ title, intro, children, alt }) {
  return (
    <section className={alt ? 'section section-alt' : 'section'}>
      <div className="wrap">
        {title && <h2>{title}</h2>}
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function Cards({ items }) {
  return (
    <div className="cards">
      {items.map((c) => (
        <div className="card" key={c.title}>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          {c.href && (
            <Link href={c.href} className="card-link">
              {c.linkLabel || 'Learn more'} →
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map((s, i) => (
        <li key={s.title}>
          <span className="step-num">{i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({ title, body, primary, secondary }) {
  return (
    <section className="cta-band">
      <div className="wrap narrow center">
        <h2>{title}</h2>
        {body && <p className="lede">{body}</p>}
        <Buttons primary={primary} secondary={secondary} />
      </div>
    </section>
  );
}

export function Code({ children, note }) {
  return (
    <figure className="code">
      <pre>
        <code>{children}</code>
      </pre>
      {note && <figcaption>{note}</figcaption>}
    </figure>
  );
}

export function Prose({ children }) {
  return <div className="prose">{children}</div>;
}
