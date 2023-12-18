import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      setIsAdmin(user.user_metadata.role === 'admin');
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setIsAdmin: (isAdmin) => setIsAdmin(isAdmin),
        user,
        setUser: (user) => setUser(user)
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
