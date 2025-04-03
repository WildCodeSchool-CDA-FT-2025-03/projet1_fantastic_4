import { Outlet } from "react-router";
import "@/global.css";

function App() {
  return (
    <>
      <main>
        <h1>Projet 1, Les 4 fantastiques</h1>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
