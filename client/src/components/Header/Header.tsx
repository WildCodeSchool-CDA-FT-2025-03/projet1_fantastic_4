import Navbar from "./Navbar/Navbar";
import "./Header.css";
import "./Burgermenu/Burgermenu.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-header"></div>
        <img src="/media-hub-icon.webp"></img>
        <Navbar />
      </header>
    </>
  );
};
export default Header;
