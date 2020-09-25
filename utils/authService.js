import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

export function login(token) {
  return Cookie.set(getAuthTokenName(), token);
}

export function logout() {
  return Cookie.remove(getAuthTokenName());
}

export function getCurrentUser(token = Cookie.get(getAuthTokenName())) {
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
  return "_xat";
}
