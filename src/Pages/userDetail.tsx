import Menu from "../Components/sidemenu";
import Navbar from "../Components/navbar";
import "../Styles/userDetail.scss";

function UserDetail() {
  return (
    <div>
      <Navbar />
      <div className="main-page">
        <div>
          <Menu />
        </div>

        <div>
          <div>
            <p>Back to Users</p>
            <div className="user-details-text">
              <h1>User Details</h1>
              <div className="activate-blacklist-btns">
                <button id="blacklist-btn">BLACKLIST USER</button>
                <button id="activate-btn">ACTIVATE USER</button>
              </div>
            </div>
          </div>

          <div>
            <div className="brief-info-section">
              <div className="name-account-section">
                <p>Grace Effiong</p>
                <p>User Tiers</p>
                <div>
                  <p>N200,000,000</p>
                  <p>Providus Bank</p>
                </div>
              </div>

              <div className="more-info">
                <p>Information</p>
                <p>Documentation</p>
                <p>Bank details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App Systems</p>
              </div>
            </div>

            <div className="details-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
