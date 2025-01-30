import { createContext } from 'react';

// Context is separated into a new file to allow
// fast reloads in Vite.
export const ThemeContext = createContext<{
  theme: string;
  changeTheme: (newTheme: string) => void;
} | null>(null);
