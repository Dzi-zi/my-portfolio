const API_URL = 'http://localhost:3000';

const fetchAPI = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth APIs
export const authAPI = {
  signup: (userData) => 
    fetchAPI('/api/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  signin: (credentials) =>
    fetchAPI('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  signout: () =>
    fetchAPI('/auth/signout', {
      method: 'GET',
    }),
};

// Contact APIs
export const contactAPI = {
  getAll: () => fetchAPI('/api/contacts'),
  
  getOne: (id) => fetchAPI(`/api/contacts/${id}`),
  
  create: (contactData) =>
    fetchAPI('/api/contacts', {
      method: 'POST',
      body: JSON.stringify(contactData),
    }),
  
  update: (id, contactData) =>
    fetchAPI(`/api/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(contactData),
    }),
  
  delete: (id) =>
    fetchAPI(`/api/contacts/${id}`, {
      method: 'DELETE',
    }),
};

// Project APIs
export const projectAPI = {
  getAll: () => fetchAPI('/api/projects'),
  
  getOne: (id) => fetchAPI(`/api/projects/${id}`),
  
  create: (projectData) =>
    fetchAPI('/api/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    }),
  
  update: (id, projectData) =>
    fetchAPI(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    }),
  
  delete: (id) =>
    fetchAPI(`/api/projects/${id}`, {
      method: 'DELETE',
    }),
};

// Education APIs
export const educationAPI = {
  getAll: () => fetchAPI('/api/qualifications'),
  
  getOne: (id) => fetchAPI(`/api/qualifications/${id}`),
  
  create: (educationData) =>
    fetchAPI('/api/qualifications', {
      method: 'POST',
      body: JSON.stringify(educationData),
    }),
  
  update: (id, educationData) =>
    fetchAPI(`/api/qualifications/${id}`, {
      method: 'PUT',
      body: JSON.stringify(educationData),
    }),
  
  delete: (id) =>
    fetchAPI(`/api/qualifications/${id}`, {
      method: 'DELETE',
    }),
};

export default { authAPI, contactAPI, projectAPI, educationAPI };