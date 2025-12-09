const API_BASE_URL = 'http://localhost:3005/api/v1';

const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { authorization: token } : {}),
    },
    ...options,
  };
  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }
  if (!response.ok) {
    const message = data?.message || 'Request failed';
    throw new Error(message);
  }
  return data;
};

const signup = (username, password, email) =>
  request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ username, password, email }),
  });

const signin = (username, password) =>
  request('/auth/signin', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

// New OAuth function
const initiateGoogleAuth = () => {
  window.location.href = `${API_BASE_URL}/auth/google`;
};

const getWebsites = () => request('/websites');
const me = () => request('/auth/me');

const updateEmail = (email) =>
  request('/websites/update', {
    method: 'PUT',
    body: JSON.stringify({ email }),
  });

const createWebsite = (url) =>
  request('/websites', {
    method: 'POST',
    body: JSON.stringify({ url }),
  });
const getWebsiteStatus = (websiteId) => request(`/websites/${websiteId}`);

export const api = {
  request,
  signup,
  signin,
  initiateGoogleAuth, 
  getWebsites,
  createWebsite,
  getWebsiteStatus,
  me,
  updateEmail
};