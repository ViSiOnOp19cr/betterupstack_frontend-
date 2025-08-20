const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3005/api/v1';

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

const signup = (username, password) =>
  request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

const signin = (username, password) =>
  request('/auth/signin', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

const getWebsites = () => request('/websites');
const me = () => request('/me');

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
  getWebsites,
  createWebsite,
  getWebsiteStatus,
  me
};


