import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import * as auth from './auth';

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  function tokenCheck() {
    if (token) {
      localStorage.getItem('token');
      auth
        .getContent(token)
        .then(() => {
          setIsAuthed(true);
          navigate('/', { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function login() {
    return new Promise((res) => {
      setIsAuthed(true);
      res();
    }).catch((err) => {
      console.log(err);
    });
  }

  function logout() {
    return new Promise((res) => {
      setIsAuthed(false);
      localStorage.removeItem('token');
      res();
    }).catch((err) => {
      console.log(err);
    });
  }

  let value = { isAuthed, logout, login, tokenCheck };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
