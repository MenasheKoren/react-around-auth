import { Navigate, Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../utils/auth';

export const ProtectedRoute = () => {
  const location = useLocation();
  const { isAuthed } = useAuth();
  return isAuthed ? (
    <Outlet />
  ) : (
    <Navigate to='signin' state={{ from: location.pathname }} />
  );
};

