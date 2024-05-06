import axios from './Api'; 

const API_URL = 'http://localhost:8080/';

const register = (name, username, email, password, role) => {
  return axios.post(API_URL + 'register', {
    name,
    username,
    email,
    password,
    role:"USER"
  });
};

const login = async (username, password) => {
  const response = await axios
        .post(API_URL + 'login', {
            username,
            password
        });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
