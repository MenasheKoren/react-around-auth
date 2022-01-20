import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

const BASE_URL = 'https://register.nomoreparties.co';

export function useAuth() {
  const [isAuthed, setIsAuthed] = React.useState(false);
  
  return {
    isAuthed,
    login() {
      return new Promise((res) => {
        setIsAuthed(true);
        res();
      }).catch((err) => {
        console.log(err);
      });
    },
    logout() {
      return new Promise((res) => {
        setIsAuthed(false);
        res();
      }).catch((err) => {
        console.log(err);
      });
    }
  };
}

export function AuthProvider({ children }) {
  const isAuthed = useAuth();
  
  return (
    <AuthContext.Provider value={isAuthed}>{children}</AuthContext.Provider>
  );
}

export default function AuthConsumer() {
  return React.useContext(AuthContext);
}

export const register = (username, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};
