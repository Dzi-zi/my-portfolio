export default function Services() {
  const list = [
    { title: 'Web Development', blurb: 'Responsive sites with React and modern JavaScript.' },
    { title: 'UI Prototyping', blurb: 'From wireframes to interactive front-end prototypes.' },
    { title: 'Testing & QA', blurb: 'Basic unit tests and manual testing workflows.' },
  ]
  return (
    <section>
      <h2>Services</h2>
      <div className="grid grid-3">
        {list.map((s, i) => (
          <article key={i} className="card">
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}