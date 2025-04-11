import "./ResearchBar.css";

type ResearchBarProps = {
  children: React.ReactNode; // Permet de passer n'importe quel composant comme enfant
};

const ResearchBar: React.FC<ResearchBarProps> = ({ children }) => {
  return <div className="research-aside">{children}</div>;
};

export default ResearchBar;
