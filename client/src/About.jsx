export default function About() {
  return (
    <section className="grid" style={{gap:'1.5rem'}}>
      <div className="card">
        <h2>About Me</h2>
        <p>
          Hello, I’m Dzifa Matrevi — a software engineering student with interests in web development and
        problem solving. I’m currently learning React, JavaScript, and C#.
        </p>
        <p>
          Outside of coursework, I like exploring open-source tools and improving my fundamentals
          in data structures and algorithms.
        </p>
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume (PDF)</a>
      </div>
      <div className="card">
        <img className="responsive" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop" alt="Laptop and code on desk" />
      </div>
    </section>
  )
}