const USER_LOCALSTORAGE_KEY = 'accessToken';

// helper to get user from localstorage
export function getStoredToken() {
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return token ? token : null;
}

export function setStoredToken(token: string): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, token);
}

export function clearStoredToken(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}
