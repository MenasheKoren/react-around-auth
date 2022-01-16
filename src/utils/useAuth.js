import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  
  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res();
      })
        .then(() => {
          console.log('loggedIn');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      })
        .then(() => {
          console.log('loggedIn');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

export function RequireAuth() {
  const { authed } = useAuth();
  
  return authed ? <Outlet /> : <Navigate to='signin' />;
}
