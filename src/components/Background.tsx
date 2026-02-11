import { useLocation } from "react-router-dom";
import characterImg from "../assets/character_02.webp";

const Background: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const showCharacter = path !== "/" && path !== "/art";

  if (!showCharacter) return null;

  return (
    <div
      className="fixed left-0 right-0 md:left-auto top-20 bottom-0 w-full md:w-[50%] md:right-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right opacity-70"
        style={{
          backgroundImage: `url(${characterImg})`,
        }}
      />
    </div>
  );
};

export default Background;
