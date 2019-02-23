import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('grommet');

  const toggleTheme = () => {
    setTheme(theme => (theme === 'grommet' ? 'dark' : 'grommet'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default {
  ThemeContext,
  ThemeProvider,
};
