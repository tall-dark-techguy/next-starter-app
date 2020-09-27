import axios from "axios";
import Cookies from "js-cookie";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error.message);
  }

  return Promise.reject(error);
});

axios.defaults.headers.common["x-auth-token"] = Cookies.get(
  process.env.AUTH_TOKEN_NAME
);

module.exports = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.delete,
};
