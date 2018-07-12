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
