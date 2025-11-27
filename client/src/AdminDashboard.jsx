import { useState } from 'react';
import ProjectForm from './ProjectForm';
import EducationForm from './EducationForm';
import ProjectList from './ProjectList';
import EducationList from './EducationList';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section>
      <h1>Admin Dashboard</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
        Manage your portfolio content
      </p>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        borderBottom: '1px solid rgba(148,163,184,.25)'
      }}>
        <button
          onClick={() => setActiveTab('projects')}
          className={activeTab === 'projects' ? 'btn' : ''}
          style={{
            background: activeTab === 'projects' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'projects' ? '#001018' : 'var(--text)',
            border: 'none',
            padding: '.75rem 1.5rem',
            cursor: 'pointer'
          }}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={activeTab === 'education' ? 'btn' : ''}
          style={{
            background: activeTab === 'education' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'education' ? '#001018' : 'var(--text)',
            border: 'none',
            padding: '.75rem 1.5rem',
            cursor: 'pointer'
          }}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'projects' && (
        <div>
          <ProjectForm />
          <ProjectList />
        </div>
      )}

      {activeTab === 'education' && (
        <div>
          <EducationForm />
          <EducationList />
        </div>
      )}
    </section>
  );
}