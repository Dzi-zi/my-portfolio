 import { projects } from './projects.data.js'

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid grid-3">
        {projects.map((p, i) => (
          <article key={i} className="card">
            <img className="responsive" src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small><strong>Role:</strong> {p.role} · <strong>Outcome:</strong> {p.outcome}</small>
          </article>
        ))}
      </div>
    </section>
  )
}