import "../Styles/menu.scss";
import arrowDown from "../Images/arrow-down.svg";

interface SideBarProp {
  width: number;
  overflow: string;
}

const Menu: React.FC<SideBarProp> = ({ width, overflow }) => {
  console.log(width);

  return (
    <div
      className="menu"
      style={{
        width: `${width}px`,

        // marginRight: "100px",
        overflow: `${overflow}`,
        margin: "0",
        padding: "0",
        // position: "absolute",
        transition: "0.5s",
      }}
    >
      <div className="upper-menu-section">
        <div className="switch">
          <p>Switch Organization</p>
          <img src={arrowDown} alt="arrowdown" />
        </div>

        <p>Dashboard</p>
      </div>
      <div>
        <p className="title">CUSTOMERS</p>
        <ul>
          <li>
            <div>Users</div>
          </li>
          <li>Guarantors</li>
          <li>Loans</li>
          <li>Decision Models</li>
          <li>Savings</li>
          <li>Loan Requests</li>
          <li>Whitelist</li>
          <li>Karma</li>
        </ul>
      </div>

      <div className="businesses-section">
        <p className="title">BUSINESSES</p>
        <ul>
          <li>Organization</li>
          <li>Loan Products</li>
          <li>Savings Product</li>
          <li>Fees and Charges</li>
          <li>Transactions</li>
          <li>Services</li>
          <li>Service Account</li>
          <li>Settlements</li>
          <li>Reports</li>
        </ul>
      </div>

      <div className="settings-section">
        <p className="title">SETTINGS</p>
        <ul>
          <li>Preferences</li>
          <li>Fees and Pricing</li>
          <li>Audit logs</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
