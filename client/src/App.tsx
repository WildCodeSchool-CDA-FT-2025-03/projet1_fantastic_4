import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <h1>Projet 1, Les 4 fantastiques</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
