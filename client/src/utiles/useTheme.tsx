import { ThemeContext } from "@/contexts/themeProvider";
import { useContext } from "react";

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("This context cannot be null");
  }
  return context;
}

export default useTheme;
