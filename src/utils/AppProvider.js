import { useState } from 'react';
import { AppContext } from '../contexts/AppContext';

export function AppProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');

  function handleUpdateLoginEmail(email) {
    setLoginEmail(email);
  }

  let value = { loginEmail, handleUpdateLoginEmail, setLoginEmail };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
