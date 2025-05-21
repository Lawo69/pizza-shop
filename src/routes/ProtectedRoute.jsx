import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const allowedRoles = ['owner'];
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Check if user is logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
