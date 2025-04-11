import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import "@/global.css";
import useTheme from "./utiles/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <main className={theme ? "light" : "dark"}>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
