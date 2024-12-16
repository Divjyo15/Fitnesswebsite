import React, { createContext, useState } from 'react';

export const StoreContextapi = createContext();

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const url = 'http://localhost:4000';  // Your backend URL

  return (
    <StoreContextapi.Provider value={{ token, setToken, url }}>
      {children}
    </StoreContextapi.Provider>
  );
};
