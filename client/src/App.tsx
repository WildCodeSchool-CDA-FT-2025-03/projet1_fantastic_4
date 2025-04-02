import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Header/Header";

function App() {
  return (
    <>
      <Navbar />
      <h1>Projet 1, Les 4 fantastiques</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
