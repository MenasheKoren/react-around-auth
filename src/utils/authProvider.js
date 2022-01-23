import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = React.useState(false);

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
      res();
    }).catch((err) => {
      console.log(err);
    });
  }

  let value = { isAuthed, logout, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
