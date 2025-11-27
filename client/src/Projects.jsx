 import { projects } from './projects.data.js'
 import { useState, useEffect } from 'react';
 import { projectAPI } from './services/api';


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectAPI.getAll();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section>
        <h2>Projects</h2>
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <div className="card">
          <p>No projects yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-3">
          {projects.map((project, i) => (
            <article key={project._id} className="card">
              <div style={{
                width: '100%',
                height: '200px',
                background: `linear-gradient(135deg, #667eea ${i * 20}%, #764ba2 100%)`,
                borderRadius: '.75rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}>
                {i + 1}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>
                <strong>Completed:</strong> {new Date(project.completion).toLocaleDateString()}
              </small>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
