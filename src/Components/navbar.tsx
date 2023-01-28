import logo from "../Images/Lendsqr-logo.png";
import Adedeji from "../Images/Adedeji.png";
import "../Styles/Navbar.scss";
import searchIcon from "../Images/search-icon.svg";
import bellIcon from "../Images/bell-icon.svg";
import arrow from "../Images/arrow.svg";
import hamburgerIcon from "../Images/hamburger.png";

interface NavbarProp {
  onWidthChange: () => void;
}

const Navbar: React.FC<NavbarProp> = ({ onWidthChange }) => {
  return (
    <nav className="navbar">
      <img
        src={hamburgerIcon}
        id="hamburger-icon"
        alt=""
        onClick={onWidthChange}
      />
      <img src={logo} alt="logo" id="navbarlogo" />
      <div id="search">
        <input type="text" placeholder="search for anything" />
        <button className="btn">
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <div className="profile-section">
        <a href="/go" className="not-for-mobile">
          Docs
        </a>
        <img className="not-for-mobile" src={bellIcon} alt="bell" />
        <img src={Adedeji} alt="Adedeji" id="profile-pic" />
        <p className="not-for-mobile">Adedeji</p>
        <img src={arrow} alt="dropdown" />
      </div>
    </nav>
  );
};

export default Navbar;
