import { Children, ThemeProps } from "@/types/themeContext.type";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeProps | null>(null);

export default function ThemeProvider({ children }: Children) {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
