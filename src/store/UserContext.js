import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from 'utils/utils';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = getLocalStorage('user');
    if (user) {
      const newUser = JSON.parse(user);
      setIsAdmin(newUser.user_metadata.role === 'admin');
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setIsAdmin: (isAdmin) => setIsAdmin(isAdmin)
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
