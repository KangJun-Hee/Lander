import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/users";

export const listUsers = () => axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL, user);

export const getUser = (userId) => axios.get(REST_API_BASE_URL + "/" + userId);
export const getUserByEmail = (email) =>
  axios.get(REST_API_BASE_URL + "/" + email);

export const login = async ({ email, password }) =>
  axios.post(REST_API_BASE_URL + "/login", { email, password });

export const logout = () =>
  axios.post(sessionStorage.removeItem("accessToken"));
export const updateUser = (userID, user) =>
  axios.put(REST_API_BASE_URL + "/" + userID, user);
