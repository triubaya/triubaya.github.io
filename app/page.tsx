import { profile } from "./profile-data";

const isExternal = (href: string) => href.startsWith("http");

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#top">{profile.name}</a>
          <nav aria-label="Main navigation">
            {profile.navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="page-shell">
        <aside className="profile-column" aria-label="Profile summary">
          <img
            className="portrait"
            src={profile.avatarUrl}
            alt={`Portrait of ${profile.name}`}
            width="240"
            height="240"
          />
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="affiliation">{profile.affiliation}</p>

          <ul className="profile-meta">
            <li><span aria-hidden="true">⌖</span>{profile.location}</li>
            {profile.emails.map((email) => (
              <li key={email}><span aria-hidden="true">✉</span><a href={`mailto:${email}`}>{email}</a></li>
            ))}
          </ul>

          <ul className="social-links" aria-label="Profile links">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={isExternal(link.href) ? "_blank" : undefined}
                  rel={isExternal(link.href) ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="content-column">
          <section id="about" className="content-section intro-section" aria-labelledby="about-heading">
            <h2 id="about-heading">About Me</h2>
            <p className="lead">{profile.introduction}</p>
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <h3>Research & Professional Interests</h3>
            <ul className="interest-list">
              {profile.interests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </section>

          <section id="publications" className="content-section" aria-labelledby="publications-heading">
            <h2 id="publications-heading">Selected Publications</h2>
            <p className="section-intro">Selected journal articles, conference papers, and other research outputs.</p>
            <ol className="publication-list">
              {profile.publications.map((publication) => (
                <li key={`${publication.year}-${publication.title}`}>
                  <span className="item-year">{publication.year}</span>
                  <div>
                    <h3>
                      {publication.href ? <a href={publication.href}>{publication.title}</a> : publication.title}
                    </h3>
                    <p>{publication.authors}</p>
                    <p><em>{publication.venue}</em></p>
                    <small>{publication.note}</small>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" className="content-section" aria-labelledby="projects-heading">
            <h2 id="projects-heading">Projects & Funding</h2>
            <p className="section-intro">Projects, scholarships, research grants, and other funded work.</p>
            <div className="project-list">
              {profile.projectsAndFunding.map((item) => (
                <article key={`${item.period}-${item.title}`}>
                  <div className="item-meta">
                    <span>{item.period}</span>
                    <span className="status">{item.status}</span>
                  </div>
                  <h3>{item.href ? <a href={item.href}>{item.title}</a> : item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="news-heading">
            <h2 id="news-heading">Recent News</h2>
            <ul className="news-list">
              {profile.news.map((item) => (
                <li key={`${item.date}-${item.text}`}><strong>{item.date}.</strong> {item.text}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
