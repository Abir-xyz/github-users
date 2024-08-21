import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';
import { useUserContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;
