// A single growing list of projects under a ~/projects header. Each entry is a
// full-width link — title, an arrow, and one quiet line of description.
// Built to grow: add to PROJECTS and the layout takes care of the rest.
const PROJECTS = [
  {
    name: 'slower roads',
    href: '#',
    desc: 'an on-device, real-time, steerable driving world model — a neural net dreams every frame, live, in your browser.',
  },
]

function Project({ name, href, desc }) {
  return (
    <a className="project" href={href}>
      <div className="project-head">
        <span>{name}</span>
        <span className="project-arrow">→</span>
      </div>
      <div className="project-desc">{desc}</div>
    </a>
  )
}

export default function Projects() {
  return (
    <section>
      <div className="projects-label">~/projects</div>
      {PROJECTS.map((p) => (
        <Project key={p.name} {...p} />
      ))}
      <div className="projects-end" />
    </section>
  )
}
