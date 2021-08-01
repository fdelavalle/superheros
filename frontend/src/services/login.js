import axios from 'axios';

const baseUrl = 'http://challenge-react.alkemy.org/';

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios({
      url: baseUrl,
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
    });
    return response.data.token;
  } catch (error) {
    return error;
  }
};

export const checkTokenValidity = (token) => {
  if (token instanceof Error) {
    return false;
  }
  return true;
};
