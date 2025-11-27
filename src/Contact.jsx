import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', form)
    alert('Thanks for your message! Redirecting to Home.')
    navigate('/')
  }

  return (
    <section className="grid">
      <div className="card">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} />

          <label htmlFor="phone">Contact Number</label>
          <input id="phone" name="phone" value={form.phone} onChange={handleChange} />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />

          <div style={{marginTop: '1rem'}}>
            <button className="btn" type="submit">Send and Return Home</button>
          </div>
        </form>
      </div>
      <div className="card">
        <h3>Contact Info</h3>
        <p>Email: matrevidzifa@gmail.com</p>
        <p>Phone: (437) 733-1870</p>
      </div>
    </section>
  )
}