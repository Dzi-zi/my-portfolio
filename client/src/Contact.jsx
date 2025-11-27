import { useState } from 'react';
import { contactAPI } from './services/api';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await contactAPI.create(form);
      setMessage('Thank you! Your message has been sent successfully.');
      // Reset form
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setMessage('Error: ' + error.message);
    }

    setLoading(false);
  }

  return (
    <section className="grid">
      <div className="card">
        <h2>Contact Me</h2>
        
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

        <div>
          <label htmlFor="firstName">First Name</label>
          <input 
            id="firstName" 
            name="firstName" 
            value={form.firstName} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName" 
            name="lastName" 
            value={form.lastName} 
            onChange={handleChange} 
          />

          <label htmlFor="email">Email Address</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={form.message} 
            onChange={handleChange} 
          />

          <div style={{marginTop: '1rem'}}>
            <button 
              className="btn" 
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3>Contact Info</h3>
        <p>Email: matrevidzifa@gmail.com</p>
        <p>Phone: (437) 733-1870</p>
        <p>Location: Toronto, ON</p>
      </div>
    </section>
  );
}