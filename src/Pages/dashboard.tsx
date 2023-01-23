import Navbar from "../Components/navbar";
import Sidebar from "../Components/sidemenu";
import "../Styles/dashboard.scss";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="main-page">
        <Sidebar />
        <div>
          <h2>Users</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
