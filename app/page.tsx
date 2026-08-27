type Publication = {
  year: string;
  title: string;
  detail: string;
  links: { label: string; href: string }[];
};

const publications: Publication[] = [
  {
    year: '2026',
    title: 'Long-wave KdV hierarchy approximation of the NLS hierarchy with nonzero boundary conditions',
    detail: 'Preprint · Robert Wegner',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2606.10687' },
      { label: 'PDF', href: '/documents/wegner-2026-long-wave-kdv-nls.pdf' },
    ],
  },
  {
    year: '2025',
    title: 'Global well-posedness of the NLS hierarchy with nonzero boundary condition',
    detail: 'Preprint · Xian Liao & Robert Wegner',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2508.14572' },
      { label: 'PDF', href: '/documents/liao-wegner-2025-nls-hierarchy.pdf' },
    ],
  },
  {
    year: '2023',
    title: 'Global-in-time well-posedness of the one-dimensional hydrodynamic Gross–Pitaevskii equations without vacuum',
    detail: 'Z. Angew. Math. Phys. 74, 194 · Robert Wegner',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2303.04606' },
      { label: 'PDF', href: '/documents/wegner-2023-hydrodynamic-gp.pdf' },
      { label: 'KIT', href: 'https://publikationen.bibliothek.kit.edu/1000163619' },
    ],
  },
  {
    year: '2026',
    title: 'On the NLS hierarchy with nonzero boundary condition',
    detail: 'PhD thesis · Karlsruhe Institute of Technology',
    links: [{ label: 'KIT', href: 'https://www.waves.kit.edu/theses.php' }],
  },
];

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Robert Wegner, home">RW</a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro" id="top">
        <p className="kicker">Karlsruhe Institute of Technology · Institute for Analysis</p>
        <h1>Robert Wegner</h1>
        <p className="role">PhD · Postdoctoral researcher</p>
      </section>

      <section className="section" id="research">
        <p className="section-label">Research</p>
        <div className="copy">
          <p>I work on dispersive, completely integrable, and stochastic partial differential equations.</p>
          <p className="muted">Collaborative Research Center 1173 · Project A12: Dynamics of the Gross–Pitaevskii equation and related dispersive equations.</p>
        </div>
      </section>

      <section className="section" id="publications">
        <p className="section-label">Publications</p>
        <div className="publication-list">
          {publications.map((publication) => (
            <article className="publication" key={publication.title}>
              <span className="year">{publication.year}</span>
              <div>
                <h2>{publication.title}</h2>
                <p>{publication.detail}</p>
              </div>
              <div className="links">
                {publication.links.map((link) => <a key={link.href} href={link.href}>{link.label} ↗</a>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="downloads">
        <p className="section-label">Thesis</p>
        <div className="copy thesis">
          <div>
            <h2>On the Long-term Behavior of a Nonlinear Stochastic Wave Equation</h2>
            <p>Master’s thesis in Mathematics · University of Bonn · 2024</p>
          </div>
          <div className="links">
            <a href="/documents/wegner-master-thesis.pdf">Download PDF ↗</a>
            <a href="https://iana.math.kit.edu/downloads/iana2/Personen/master_thesis_robert_wegner.pdf">KIT source ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <span>Robert Wegner · KIT · Karlsruhe</span>
        <a href="mailto:robert.wegner@kit.edu">robert.wegner@kit.edu ↗</a>
      </footer>
    </main>
  );
}
