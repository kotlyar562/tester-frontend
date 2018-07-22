import 'whatwg-fetch';


const domen = 'http://localhost:8000';


// Проверка токена
export const verifyToken = (token) => {
  console.log('---verify token');
  return fetch(`${domen}/api/v1/auth/jwt/verify/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then(() => ({ success: true }));
      }
      return response.json().then(() => ({ success: false }));
    })
    .catch(error => error);
};


// Обновление токена, возвращение нового
export const updateToken = (token) => {
  console.log('---update token');
  return fetch(`${domen}/api/v1/auth/jwt/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
    .then(response => response.json())
    .then(data => data.token)
    .catch(error => error);
};

// Логин по email и паролю
export const fetchLoginUser = ({ email, password }) => {
  console.log('---login email and pass', email, password);
  return fetch(`${domen}/api/v1/auth/jwt/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json()
        .then(data => ({ success: true, data }));
    }
    return response.json()
      .then(errors => ({ success: false, errors }));
  }).catch(errors => errors);
};

// Загрузка данных о пользователе
export const fetchUserData = (token) => {
  console.log('---load user data');
  return fetch(`${domen}/api/v1/auth/me/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    credentials: 'include',
  }).then((response) => {
    if (response.ok) {
      return response.json()
        .then(data => ({ success: true, data }));
    }
    return response.json()
      .then(errors => ({ success: false, errors }));
  }).catch(errors => errors);
};

// Регистрация нового пользователя
export const fetchRegisterUser = ({ email, password }) => {
  console.log('---start register');
  return fetch(`${domen}/api/v1/auth/users/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json().then(() => ({ success: true }));
    }
    return response.json()
      .then(errors => ({ success: false, errors }));
  }).catch(errors => errors);
};

// Изменение личных данных пользоватлея
export const fetchChangeUser = (token, data) => {
  console.log('---change user info');
  return fetch(`${domen}/api/v1/auth/me/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json()
        .then(newData => ({ success: true, data: newData }));
    }
    return response.json()
      .then(errors => ({ success: false, errors }));
  }).catch(errors => errors);
};

// Изменеие пароля пользователя
export const fetchChangeUserPassword = (token, current_password, new_password) => {
  console.log('---change user password');
  return fetch(`${domen}/api/v1/auth/password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      new_password,
      current_password,
    }),
  }).then((response) => {
    if (response.ok) {
      return { success: true };
    }
    return response.json()
      .then(errors => ({ success: false, errors }));
  }).catch(errors => errors);
};
