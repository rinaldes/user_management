export const urlAPI = "https://apistaging.linikerja.id/";

export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('orgLogin');
  localStorage.removeItem('orgName');
  localStorage.removeItem('token-access');
}

// set the token and user from the session storage
export const setUserSession = (token, user, organisasi) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('orgLogin', organisasi.UID);
  localStorage.setItem('orgName', organisasi.Title);
  localStorage.setItem('token-access', token.Access);
}

// View Use