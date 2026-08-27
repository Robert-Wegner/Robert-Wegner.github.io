type Item = {
  year: string;
  title: string;
  detail: string;
  links?: { label: string; href: string }[];
};

const sections: { title: string; items: Item[] }[] = [
  {
    title: 'Publications',
    items: [{
      year: '2023',
      title: 'Global-in-time well-posedness of the one-dimensional hydrodynamic Gross–Pitaevskii equations without vacuum',
      detail: 'Z. Angew. Math. Phys. 74, 194 · Robert Wegner',
      links: [
        { label: 'arXiv', href: 'https://arxiv.org/abs/2303.04606' },
        { label: 'PDF', href: '/documents/wegner-2023-hydrodynamic-gp.pdf' },
        { label: 'KIT', href: 'https://publikationen.bibliothek.kit.edu/1000163619' },
      ],
    }],
  },
  {
    title: 'Preprints',
    items: [
      {
        year: '2026',
        title: 'Long-wave KdV hierarchy approximation of the NLS hierarchy with nonzero boundary conditions',
        detail: 'Preprint · Robert Wegner',
        links: [
          { label: 'arXiv', href: 'https://arxiv.org/abs/2606.10687' },
          { label: 'PDF', href: '/documents/wegner-2026-long-wave-kdv-nls.pdf' },
          { label: 'KIT', href: 'https://www.waves.kit.edu/downloads/CRC1173_Preprint_2026-36.pdf' },
        ],
      },
      {
        year: '2025',
        title: 'Global well-posedness of the NLS hierarchy with nonzero boundary condition',
        detail: 'Preprint · Xian Liao & Robert Wegner',
        links: [
          { label: 'arXiv', href: 'https://arxiv.org/abs/2508.14572' },
          { label: 'PDF', href: '/documents/liao-wegner-2025-nls-hierarchy.pdf' },
          { label: 'KIT', href: 'https://publikationen.bibliothek.kit.edu/1000195469' },
        ],
      },
    ],
  },
  {
    title: 'Upcoming',
    items: [{
      year: 'Soon',
      title: 'On the boundedness and continuity of |ψ|⁻¹ψ̄∇ψ',
      detail: 'Forthcoming preprint · Lars Eric Hientzsch, Raffaele Scandone & Robert Wegner',
    }],
  },
  {
    title: 'Theses',
    items: [
      {
        year: '2026',
        title: 'On the NLS hierarchy with nonzero boundary condition',
        detail: 'PhD thesis · Karlsruhe Institute of Technology',
        links: [{ label: 'KIT', href: 'https://www.waves.kit.edu/theses.php' }],
      },
      {
        year: '2024',
        title: 'On the Long-term Behavior of a Nonlinear Stochastic Wave Equation',
        detail: 'Master’s thesis in Mathematics · University of Bonn',
        links: [
          { label: 'PDF', href: '/documents/wegner-master-thesis.pdf' },
          { label: 'KIT', href: 'https://iana.math.kit.edu/downloads/iana2/Personen/master_thesis_robert_wegner.pdf' },
        ],
      },
    ],
  },
];

const projects: Item[] = [
  { year: '01', title: 'simPDE ↗', detail: 'A web app for simulating a range of partial differential equations.', links: [{ label: 'Visit', href: 'https://robert-wegner.github.io/simpde/' }] },
  { year: '02', title: 'Quickdice ↗', detail: 'An Owlbear Rodeo extension for fast, command-style dice rolls.', links: [{ label: 'Visit', href: 'https://github.com/Robert-Wegner/quickdice' }] },
  { year: '03', title: 'Steiner symmetrization ↗', detail: 'An interactive page for exploring Steiner symmetrization.', links: [{ label: 'Visit', href: 'https://robert-wegner.github.io/steiner-symmetrization/' }] },
];

const talks: Item[] = [
  { year: 'Jul 2026', title: 'Long-wave KdV hierarchy approximation of the NLS hierarchy with nonzero boundary conditions', detail: 'Athens · AIMS Conference' },
  { year: 'Dec 2025', title: 'On the structure of the NLS hierarchy', detail: 'Dalian · Mini-course' },
  { year: 'Mar 2025', title: 'Long-wave approximation of the NLS hierarchy with nonzero boundary data by the KdV hierarchy', detail: 'Karlsruhe · Conference on Mathematics of Wave Phenomena' },
  { year: 'Jun 2024', title: 'Global well-posedness of the one-dimensional hydrodynamic Gross–Pitaevskii equations without vacuum', detail: 'Karlstad · Equadiff' },
  { year: 'May 2024', title: 'Well-posedness and long-wave KdV approximation of hydrodynamic Gross–Pitaevskii equations', detail: 'Stuttgart · Oberseminar Nichtlineare Differentialgleichungen' },
  { year: 'Feb 2024', title: 'Hamiltonian studies on counter-propagating water waves', detail: 'Bad Teinach · Scientific Retreat' },
];

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Robert Wegner, home">RW</a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#talks">Talks</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro" id="top">
        <h1>Robert Wegner</h1>
        <p className="role">Postdoctoral researcher · Institute for Analysis, Karlsruhe Institute of Technology</p>
      </section>

      <section className="section" id="research">
        <p className="section-label">Research</p>
        <div className="copy">
          <p>My work aims to improve our understanding of the long-term behavior of dispersive, completely integrable, and stochastic nonlinear partial differential equations.</p>
          <p className="muted">Collaborative Research Center 1173 · Project A12: Dynamics of the Gross–Pitaevskii equation and related dispersive equations.</p>
        </div>
      </section>

      <section className="section" id="publications">
        <p className="section-label">Publications</p>
        <div className="publication-list">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="category">{section.title}</h2>
              {section.items.map((item) => (
                <article className="publication" key={item.title}>
                  <span className="year">{item.year}</span>
                  <div><h2>{item.title}</h2><p>{item.detail}</p></div>
                  {item.links && <div className="links">{item.links.map((link) => <a key={link.href} href={link.href}>{link.label} ↗</a>)}</div>}
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="talks">
        <p className="section-label">Talks</p>
        <div className="publication-list">
          {talks.map((talk) => (
            <article className="publication" key={`${talk.year}-${talk.title}`}>
              <span className="year">{talk.year}</span>
              <div><h2>{talk.title}</h2><p>{talk.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-label">Projects</p>
        <div className="publication-list">
          {projects.map((project) => (
            <article className="publication other-entry" key={project.title}>
              <span className="year">{project.year}</span>
              <div><h2>{project.title}</h2><p>{project.detail}</p></div>
              <div className="links">{project.links?.map((link) => <a key={link.href} href={link.href}>{link.label} ↗</a>)}</div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <span>Robert Wegner · Karlsruhe</span>
        <span className="contact-links">
          <a href="mailto:robert.wegner@kit.edu">robert.wegner@kit.edu ↗</a>
          <a href="mailto:robert.wegner4@outlook.de">robert.wegner4@outlook.de ↗</a>
          <a href="https://github.com/Robert-Wegner">GitHub ↗</a>
          <a href="https://www.waves.kit.edu/people_robertwegner.php">KIT ↗</a>
        </span>
      </footer>
    </main>
  );
}
