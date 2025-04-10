import "./themeButton.css";

export default function ThemeButton() {
  return (
    <>
      <button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </button>
    </>
  );
}
