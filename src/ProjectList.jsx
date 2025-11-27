import { useState, useEffect } from 'react';
import { projectAPI } from './services/api';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const data = await projectAPI.getAll();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await projectAPI.delete(id);
        fetchProjects(); 
      } catch (error) {
        alert('Error deleting project: ' + error.message);
      }
    }
  };

  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h3>Manage Projects ({projects.length})</h3>
      {projects.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>No projects yet. Add one above!</p>
      ) : (
        <div className="grid grid-3">
          {projects.map((project) => (
            <div key={project._id} className="card">
              <h4>{project.title}</h4>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)' }}>
                {new Date(project.completion).toLocaleDateString()}
              </p>
              <p>{project.description.substring(0, 100)}...</p>
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                <button
                  className="btn"
                  style={{ fontSize: '.85rem', padding: '.5rem 1rem' }}
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}