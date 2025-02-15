import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (username: string, password: string) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const fetchQuizzes = async () => {
  return axios.get(`${API_URL}/quizzes`);
};

export const createQuiz = async (title: string, description: string) => {
  return axios.post(`${API_URL}/quizzes`, { title, description });
};

export const deleteQuiz = async (id: number) => {
  return axios.delete(`${API_URL}/quizzes/${id}`);
};

export const updateQuiz = async (id: number, title: string, description: string) => {
  return axios.put(`${API_URL}/quizzes/${id}`, { title, description });
};
