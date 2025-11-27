import { useState, useEffect } from 'react';
import { educationAPI } from './services/api';

export default function EducationList() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEducations = async () => {
    try {
      const data = await educationAPI.getAll();
      setEducations(data);
    } catch (error) {
      console.error('Error fetching educations:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this education entry?')) {
      try {
        await educationAPI.delete(id);
        fetchEducations(); // Refresh list
      } catch (error) {
        alert('Error deleting education: ' + error.message);
      }
    }
  };

  if (loading) return <p>Loading education...</p>;

  return (
    <div>
      <h3>Manage Education ({educations.length})</h3>
      {educations.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>No education entries yet. Add one above!</p>
      ) : (
        <div className="grid">
          {educations.map((education) => (
            <div key={education._id} className="card">
              <h4>{education.title}</h4>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)' }}>
                Completed: {new Date(education.completion).toLocaleDateString()}
              </p>
              <p>{education.description}</p>
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                <button
                  className="btn"
                  style={{ fontSize: '.85rem', padding: '.5rem 1rem' }}
                  onClick={() => handleDelete(education._id)}
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