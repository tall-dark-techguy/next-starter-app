import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

export function login(token) {
  return Cookie.set(process.env.AUTH_TOKEN_NAME, token);
}

export function logout() {
  return Cookie.remove(process.env.AUTH_TOKEN_NAME);
}

export function getCurrentUser(
  token = Cookie.get(process.env.AUTH_TOKEN_NAME)
) {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export function isAuthenticated() {
  if (getCurrentUser() === null) {
    return false;
  }
  return true;
}

export function getAuthTokenName() {
  return process.env.AUTH_TOKEN_NAME;
}
