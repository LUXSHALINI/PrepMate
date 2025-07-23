

import axios from 'axios';

const API = import.meta.env.VITE_API_URL + '/questions';

//  For user to fetch questions (without answers)
export const getQuestionsForUser = () => {
  const token = localStorage.getItem('auth_token');
  return axios.get(`${API}questions/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

//  For admin to create question
export const createQuestion = (data) => {
  const token = localStorage.getItem('auth_token');
  return axios.post(`${API}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// For admin to fetch all questions
export const getAllQuestionsAdmin = () => {
  const token = localStorage.getItem('auth_token');
  return axios.post(`${API}/admin`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
};
