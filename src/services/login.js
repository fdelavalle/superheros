import axios from 'axios';

const baseUrl = 'http://localhost:8080/login';

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(baseUrl, {
    body: {
      email: email,
      password: password,
    },
  });
  return response.data.token;
};
