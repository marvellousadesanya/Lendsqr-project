import Navbar from "../Components/navbar";
import { useEffect, useState } from "react";
import Sidebar from "../Components/sidemenu";
import icon1 from "../Images/user-icon.svg";
import icon2 from "../Images/active-users-icon.svg";
import icon3 from "../Images/users-with-loan-icon.svg";
import icon4 from "../Images/users-with-savings-icon.svg";
import moreOptions from "../Images/more-options.svg";
import nextBtn from "../Images/next-btn.svg";
import prevBtn from "../Images/prev-btn.svg";
import "../Styles/dashboard.scss";
import Axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    Axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    )
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const formattedDate =

  return (
    <div>
      <Navbar />
      <div className="main-page">
        <Sidebar />
        <div>
          <h2>Users</h2>
          <div className="boxes-container">
            <div className="boxes">
              <div>
                <img src={icon1} alt="icon" />
                <h3 className="box-title">USERS</h3>
                <p className="figure">2,453</p>
              </div>
            </div>
            <div className="boxes">
              <div>
                <img src={icon2} alt="icon" />
                <h3 className="box-title">ACTIVE USERS</h3>
                <p className="figure">2,453</p>
              </div>
            </div>
            <div className="boxes">
              <div>
                <img src={icon3} alt="icon" />
                <h3 className="box-title">USERS WITH LOANS</h3>
                <p className="figure">12,453</p>
              </div>
            </div>
            <div className="boxes">
              <div>
                <img src={icon4} alt="icon" />
                <h3 className="box-title">USERS WITH SAVINGS</h3>
                <p className="figure">102,453</p>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead className="header-titles">
                <tr>
                  <th>ORGANIZATION</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  <th>DATE JOINED</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                      {new Date(user.createdAt).toLocaleString("en-US", {
                        timeZone: "UTC",
                        hour12: true,
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        // second: "numeric",
                      })}
                    </td>
                    <td>placehold</td>
                    <td id="moreOptions">
                      <img src={moreOptions} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="filter-next-section">
              <div>
                <p>
                  Showing
                  <select>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option>
                    <option>70</option>
                    <option>80</option>
                    <option>90</option>
                    <option>100</option>
                  </select>{" "}
                  out of 100
                </p>
              </div>

              <div>
                <div className="pagination">
                  <img src={prevBtn} alt="" />
                  <p>1 2 3 4 5</p>
                  <img src={nextBtn} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
