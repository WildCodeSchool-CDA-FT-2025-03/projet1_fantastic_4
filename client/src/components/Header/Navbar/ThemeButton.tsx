import useTheme from "@/utiles/useTheme";
import "./themeButton.css";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme}
          onChange={() => setTheme(!theme)}
        />
        <span className="slider"></span>
      </label>
    </>
  );
}
