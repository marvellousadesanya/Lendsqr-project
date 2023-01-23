import logo from "../Images/Lendsqr-logo.png";
import Adedeji from "../Images/Adedeji.png";
import "../Styles/Navbar.scss";
import searchIcon from "../Images/search-icon.svg";
import bellIcon from "../Images/bell-icon.svg";
import arrow from "../Images/arrow.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" id="navbarlogo" />
      <div>
        <input type="text" placeholder="search for anything" />
        <button className="btn">
          <img src={searchIcon} alt="searc" />
        </button>
      </div>
      <div className="profile-section">
        <a href="/go">Docs</a>
        <img src={bellIcon} alt="bell" />
        <img src={Adedeji} alt="Adedeji" id="profile-pic" />
        <p>Adedeji</p>
        <img src={arrow} alt="dropdown" />
      </div>
    </nav>
  );
}

export default Navbar;
