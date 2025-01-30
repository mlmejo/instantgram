import { PropsWithChildren, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState('dark');

  // React recommends to not directly pass a state dispatcher
  // as props, also using a utility function can make
  // it easier to work with Typescript.
  function changeTheme(newTheme: string) {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
