export const urlAPI = "https://apistaging.linikerja.id/";

export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('orgLogin');
  sessionStorage.removeItem('orgName');
  sessionStorage.removeItem('token-access');
}

// set the token and user from the session storage
export const setUserSession = (token, user, organisasi) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
  sessionStorage.setItem('orgLogin', organisasi.UID);
  sessionStorage.setItem('orgName', organisasi.Title);
  sessionStorage.setItem('token-access', token.Access);
}

// View Use