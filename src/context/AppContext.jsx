import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [role, setRole] = useState(null); // null = not chosen yet

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, role, setRole, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
