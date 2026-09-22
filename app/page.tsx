import { profile } from "./profile-data";

const isExternal = (href: string) => href.startsWith("http");

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tri Ubaya, back to top">
          <span>{profile.initials}</span>
          <strong>{profile.name}</strong>
        </a>

        <nav aria-label="Main navigation">
          {profile.navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk</a>
      </header>

      <main id="top" className="page-shell">
        <aside className="profile-column" aria-label="Profile summary">
          <div className="portrait-wrap">
            <img
              className="portrait"
              src={profile.avatarUrl}
              alt={`Portrait of ${profile.name}`}
              width="480"
              height="480"
            />
            <span className="portrait-mark" aria-hidden="true">{profile.initials}</span>
          </div>

          <p className="eyebrow">Personal portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>

          <dl className="profile-details">
            <div><dt>Based in</dt><dd>{profile.location}</dd></div>
            <div><dt>Status</dt><dd className="status">{profile.availability}</dd></div>
          </dl>

          <div className="social-links" aria-label="Social links">
            {profile.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noreferrer" : undefined}
              >
                {link.label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="content-column">
          <section className="hero" aria-labelledby="intro-heading">
            <p className="section-label">Hello — welcome</p>
            <h2 id="intro-heading">{profile.intro}</h2>
            <a className="text-link" href="#about">Read my story <span aria-hidden="true">↓</span></a>
          </section>

          <section id="about" className="section section-about" aria-labelledby="about-heading">
            <div className="section-heading">
              <p className="section-index">01</p>
              <h2 id="about-heading">About me</h2>
            </div>
            <div className="prose">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section id="focus" className="section" aria-labelledby="focus-heading">
            <div className="section-heading">
              <p className="section-index">02</p>
              <h2 id="focus-heading">Current focus</h2>
            </div>
            <div className="focus-grid">
              {profile.focusAreas.map((item) => (
                <article className="focus-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="updates" className="section" aria-labelledby="updates-heading">
            <div className="section-heading">
              <p className="section-index">03</p>
              <h2 id="updates-heading">Recent updates</h2>
            </div>
            <div className="updates-list">
              {profile.updates.map((update) => (
                <a className="update-item" href={update.href} key={`${update.date}-${update.title}`}>
                  <time>{update.date}</time>
                  <span className="update-copy">
                    <strong>{update.title}</strong>
                    <span>{update.description}</span>
                  </span>
                  <span className="update-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-section" aria-labelledby="contact-heading">
            <p className="section-label">Have something in mind?</p>
            <h2 id="contact-heading">Let&apos;s build something useful.</h2>
            <a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
          </section>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
