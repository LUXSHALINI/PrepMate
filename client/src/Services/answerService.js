import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const submitAnswer = (questionId, selectedAnswer) =>
  axios.post(`${API}/answers`, { questionId, selectedAnswer }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export const getAllAnswersAdmin = () =>
  axios.get(`${API}/answers/admin`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
