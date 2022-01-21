import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthed } = useAuth();
  return isAuthed ? (
    children
  ) : (
    <Navigate to="signin" replace state={{ from: location.pathname }} />
  );
};
