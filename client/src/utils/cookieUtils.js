import Cookies from 'js-cookie';

const COOKIE_OPTIONS = {
  expires: 7,
  secure: true,
  sameSite: 'Strict',
};

// Set a cookie
export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, { ...COOKIE_OPTIONS, ...options });
};

// Get a cookie
export const getCookie = (name) => {
  return Cookies.get(name);
};

// Remove a cookie
export const removeCookie = (name) => {
  Cookies.remove(name);
};

// Clear all cookies
export const clearAllCookies = () => {
  Cookies.remove('authToken');
  Cookies.remove('userPreferences');
  Cookies.remove('userId');
};

// Set auth token
export const setAuthToken = (token) => {
  setCookie('authToken', token, { expires: 7 });
};

// Get auth token
export const getAuthToken = () => {
  return getCookie('authToken');
};

// Remove auth token
export const removeAuthToken = () => {
  removeCookie('authToken');
};

// Set user preferences
export const setUserPreferences = (preferences) => {
  setCookie('userPreferences', JSON.stringify(preferences), { expires: 30 });
};

// Get user preferences
export const getUserPreferences = () => {
  const prefs = getCookie('userPreferences');
  return prefs ? JSON.parse(prefs) : null;
};

// Set user ID
export const setUserId = (userId) => {
  setCookie('userId', userId, { expires: 7 });
};

// Get user ID
export const getUserId = () => {
  return getCookie('userId');
};
