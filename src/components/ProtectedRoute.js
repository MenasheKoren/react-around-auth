import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children, isAuthed }) => {
  const location = useLocation();
  return isAuthed ? (
    children
  ) : (
    <Navigate to="signin" replace state={{ from: location.pathname }} />
  );
};
