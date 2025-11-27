import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <div>
        <h1>Welcome!! I build nice, user-friendly web experiences.</h1>
        <p>
          This portfolio showcases my projects, skills, and background. I care about writing readable code,
          learning continuously, and delivering accessible, responsive interfaces.
        </p>
        <div style={{display:'flex', gap:'.75rem', marginTop:'1rem'}}>
          <Link to="/about" className="btn">About me</Link>
          <Link to="/projects" className="btn" style={{background:'#94f'}}>View projects</Link>
        </div>
        {/* <console.log('Home component loaded'); */}
      </div>
      <div className="card">
        <h2>Mission</h2>
        <p>
          Build software that is reliable, inclusive, and helpful. I enjoy turning ideas into
          working products and collaborating with teams to learn and iterate.
        </p>
      </div>
    </section>
  )
}