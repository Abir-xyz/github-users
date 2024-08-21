import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
