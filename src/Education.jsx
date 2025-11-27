import { useState, useEffect } from 'react';
import { educationAPI } from './services/api';

export default function Education() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const data = await educationAPI.getAll();
        setEducations(data);
      } catch (error) {
        console.error('Error fetching education:', error);
      }
      setLoading(false);
    };

    fetchEducations();
  }, []);

  if (loading) {
    return (
      <section>
        <h2>Education</h2>
        <p>Loading education...</p>
      </section>
    );
  }

  return (
    <section className="grid">
      <div className="card">
        <h2>Education</h2>
        {educations.length === 0 ? (
          <p>No education entries yet.</p>
        ) : (
          <div style={{ marginTop: '1rem' }}>
            {educations.map((edu) => (
              <div key={edu._id} style={{
                padding: '1rem',
                marginBottom: '1rem',
                background: 'rgba(148,163,184,.05)',
                borderRadius: '.5rem',
                borderLeft: '4px solid var(--accent)'
              }}>
                <h3 style={{ marginTop: 0 }}>{edu.title}</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '.5rem' }}>
                  Completed: {new Date(edu.completion).toLocaleDateString()}
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}