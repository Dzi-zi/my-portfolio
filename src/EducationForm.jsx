import { useState } from 'react';
import { educationAPI } from './services/api';

export default function EducationForm({ existingEducation, onSuccess }) {
  const [formData, setFormData] = useState({
    title: existingEducation?.title || '',
    firstName: existingEducation?.firstName || 'Dzifa',
    lastName: existingEducation?.lastName || 'Matrevi',
    email: existingEducation?.email || 'matrevidzifa@gmail.com',
    completion: existingEducation?.completion?.split('T')[0] || '',
    description: existingEducation?.description || '',
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
      if (existingEducation) {
        await educationAPI.update(existingEducation._id, formData);
        setMessage('Education updated successfully!');
      } else {
        await educationAPI.create(formData);
        setMessage('Education added successfully!');
        // Reset form
        setFormData({
          title: '',
          firstName: 'Dzifa',
          lastName: 'Matrevi',
          email: 'dzifa@example.com',
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
      <h3>{existingEducation ? 'Edit Education' : 'Add New Education'}</h3>
      
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
        <label htmlFor="title">Degree/Certificate Title *</label>
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
          {loading ? 'Saving...' : existingEducation ? 'Update Education' : 'Add Education'}
        </button>
      </form>
    </div>
  );
}