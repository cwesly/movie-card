import Fds from "../../assets/NetflixLogoSvg.svg";
type IconNetflixProp = {
  className?: string;
  size?: string;
};

const IconNetflix = ({ size, className }: IconNetflixProp) => {
  return (
    <img src={Fds} alt="icon Netflix" className={`${className} ${size}`} />
  );
};

export default IconNetflix;
