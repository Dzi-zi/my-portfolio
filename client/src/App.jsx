import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Education from './Education.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import Logo from './Logo.jsx'
import Footer from './Footer.jsx'

export default function App() {
  const { user, signout, isAdmin } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="container nav-inner">
          <NavLink to="/" className="brand">
            <Logo size={28} />
            <span>My Portfolio</span>
          </NavLink>
          
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            {/* Show Admin Dashboard only for admins */}
            {isAdmin() && <NavLink to="/admin">Admin</NavLink>}

            {/* Auth links */}
            {user ? (
              <button onClick={signout} className="btn" style={{ padding: '0.5rem 0.75rem' }}>
                Logout ({user.name})
              </button>
            ) : (
              <>
                <NavLink to="/signin">Sign In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Admin Route */}
          <Route
            path="/admin"
            element={
              isAdmin() ? <AdminDashboard /> : <Navigate to="/signin" />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}