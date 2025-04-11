import useTheme from "@/utiles/useTheme";
import "./footer.css";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={theme ? "light" : "dark"}>
      <p>
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
