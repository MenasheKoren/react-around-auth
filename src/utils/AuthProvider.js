import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import * as auth from './auth';

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const tokenCheck = () => {
    if (token) {
      localStorage.getItem('token');
      auth.getContent(token).then(() => {
        setIsAuthed(true);
        navigate('/', { replace: true });
      });
    }
  };

  function login() {
    return new Promise((res) => {
      setIsAuthed(true);
      res();
    });
  }

  function logout() {
    return new Promise((res) => {
      setIsAuthed(false);
      localStorage.removeItem('token');
      res();
    });
  }

  const value = { isAuthed, logout, login, tokenCheck };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
