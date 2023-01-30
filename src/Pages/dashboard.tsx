import { useEffect, useState } from "react";
import ModalMenu from "../Components/moreOptions";
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

interface ParentProps {}
interface WidthState {
  width: number;
  overflow: string;
}

const Dashboard: React.FC<ParentProps> = () => {
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStyles, setModalStyles] = useState({});
  const [width, setWidth] = useState<WidthState["width"]>(223); //width of side menu
  const [overflow, setOverflow] = useState("hidden");

  // Code block to segment list in dropdown menu
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumLimit(parseInt(event.target.value));
  };
  const handleOptionClick = (event: React.MouseEvent<HTMLOptionElement>) => {
    console.log("works");
  };

  // const activeUsers = new Date(users.createdAt) > new Date("2020-12-31");

  const handleOpenModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const x = e.clientX;
    const y = e.clientY;
    setModalStyles({
      left: `${x}px`,
      top: `${y}px`,
    });
    setModalIsOpen(true);
  };

  const toggleWidth = () => {
    setWidth(width === 0 ? 240 : 0);
    setOverflow(width === 0 ? "visible" : "hidden");
  };

  let filteredUsers = users.slice(0, numLimit); // The Variable that holds the filtered list

  return (
    <div>
      <Navbar onButtonClick={toggleWidth} />
      <div className="main-page">
        <Sidebar overflow={overflow} width={width} />
        <div className="other-area">
          <h2>Users</h2>
          <div className="boxes-container">
            <div className="boxes">
              <div className="inner-box">
                <img src={icon1} alt="icon" />
                <h3 className="box-title">USERS</h3>
                <p className="figure">{users.length}</p>
              </div>
            </div>
            <div className="boxes">
              <div className="inner-box">
                <img src={icon2} alt="icon" />
                <h3 className="box-title">ACTIVE USERS</h3>
                <p className="figure">12,000</p>
              </div>
            </div>
            <div className="boxes">
              <div className="inner-box">
                <img src={icon3} alt="icon" />
                <h3 className="box-title">USERS WITH LOANS</h3>
                <p className="figure">12,453</p>
              </div>
            </div>
            <div className="boxes">
              <div className="inner-box">
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
                    {/* If the date returned was before 2020, user is inactive */}
                    <td id="status">
                      {new Date(user.createdAt) < new Date("2020-12-31")
                        ? "Inactive"
                        : "Active"}
                    </td>
                    <td id="moreOptions">
                      <img id="more-options-menu" src={moreOptions} alt="" />
                      {modalIsOpen && (
                        <ModalMenu
                          style={modalStyles}
                          onClose={() => setModalIsOpen(false)}
                        />
                      )}
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
};

export default Dashboard;
