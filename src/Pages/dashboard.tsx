import { useEffect, useState } from "react";
import Axios from "axios";

// Style
import "../Styles/dashboard.scss";

// Components
import Sidebar from "../Components/sidemenu";
import FilterBox from "../Components/Filterbox";
import Navbar from "../Components/navbar";

// Images
import icon1 from "../Images/user-icon.svg";
import icon2 from "../Images/active-users-icon.svg";
import icon3 from "../Images/users-with-loan-icon.svg";
import icon4 from "../Images/users-with-savings-icon.svg";
import moreOptions from "../Images/more-options.svg";
import filterIcon from "../Images/filter-icon.svg";
import nextBtn from "../Images/next-btn.svg";
import prevBtn from "../Images/prev-btn.svg";

function Dashboard() {
  // API call
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

  const [users, setUsers] = useState<any[]>([]);
  const [numLimit, setNumLimit] = useState<number>(10); // sets number of users to show
  const [modalFilter, setModalFilter] = useState<boolean>(false); //shows modal window onclick

  // Code block to segment list in dropdown menu
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumLimit(parseInt(event.target.value));
  };
  const handleOptionClick = (event: React.MouseEvent<HTMLOptionElement>) => {
    console.log("works");
  };

  let filteredUsers = users.slice(0, numLimit); // The Variable that holds the filtered list

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
                <p className="figure">{users.length}</p>
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
                  <th>
                    ORGANIZATION{" "}
                    <img
                      className="filter-icon"
                      src={filterIcon}
                      alt=""
                      onClick={() => setModalFilter(!modalFilter)}
                    />
                  </th>
                  <th>
                    USERNAME{" "}
                    <img className="filter-icon" src={filterIcon} alt="" />
                  </th>
                  <th>
                    EMAIL{" "}
                    <img src={filterIcon} alt="" className="filter-icon" />
                  </th>
                  <th>
                    PHONE NUMBER{" "}
                    <img src={filterIcon} alt="" className="filter-icon" />
                  </th>
                  <th>
                    DATE JOINED{" "}
                    <img src={filterIcon} alt="" className="filter-icon" />
                  </th>
                  <th>
                    STATUS{" "}
                    <img src={filterIcon} alt="" className="filter-icon" />
                  </th>
                </tr>
              </thead>

              {modalFilter ? <FilterBox /> : ""}

              <tbody>
                {filteredUsers.map((user) => (
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
                  <select onChange={handleChange}>
                    <option>10</option>
                    <option onClick={handleOptionClick}>20</option>
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
