import { useState } from 'react';
import { projectAPI } from './services/api';

export default function ProjectForm({ existingProject, onSuccess }) {
  const [formData, setFormData] = useState({
    title: existingProject?.title || '',
    firstName: existingProject?.firstName || 'Dzifa',
    lastName: existingProject?.lastName || 'Matrevi',
    email: existingProject?.email || 'matrevidzifa@gmail.com',
    completion: existingProject?.completion?.split('T')[0] || '',
    description: existingProject?.description || '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (existingProject) {
        await projectAPI.update(existingProject._id, formData);
        setMessage('Project updated successfully!');
      } else {
        await projectAPI.create(formData);
        setMessage('Project created successfully!');
        
        setFormData({
          title: '',
          firstName: 'Dzifa',
          lastName: 'Matrevi',
          email: 'matrevidzifa@gmail.com',
          completion: '',
          description: '',
        });
      }
      
      if (onSuccess) onSuccess();
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="card" style={{ marginBottom: '2rem' }}>
      <h3>{existingProject ? 'Edit Project' : 'Add New Project'}</h3>
      
      {message && (
        <div style={{
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '5px',
          background: message.includes('Error') ? '#fee' : '#dfd',
          color: message.includes('Error') ? '#c33' : '#363',
        }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Project Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="completion">Completion Date *</label>
        <input
          id="completion"
          name="completion"
          type="date"
          value={formData.completion}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />

        <button className="btn" type="submit" disabled={loading}>
          {loading ? 'Saving...' : existingProject ? 'Update Project' : 'Add Project'}
        </button>
      </form>
    </div>
  );
}