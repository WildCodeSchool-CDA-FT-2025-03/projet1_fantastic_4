import Navbar from "./Navbar/Navbar";
import "../Header/Header.css";
import "../Header/Burgermenu/Burgermenu.css";
import Burgermenu from "../Header/Burgermenu/Burgermenu";

const Header = () => {
  return (
    <>
      <header>
        <img src="/media-hub-icon.webp"></img>
        <Burgermenu />
        <Navbar />
      </header>
    </>
  );
};
export default Header;
