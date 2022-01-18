import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';

export default function ProtectedRoute() {
  const location = useLocation();
  const { isAuthed } = useAuth();
  return isAuthed ? (
    <Outlet />
  ) : (
    <Navigate to='signin' replace state={{ from: location.pathname }} />
  );
}
