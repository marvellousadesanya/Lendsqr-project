// import { useState, useEffect } from "react";
// import Menu from "../Components/sidemenu";
// import Navbar from "../Components/navbar";
// import "../Styles/userDetail.scss";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function UserDetail() {
//   const { id } = useParams();
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     axios
//       .get(
//         `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
//       )
//       .then((response) => {
//         setUser(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <Navbar />
//       <div className="main-page">
//         <div>
//           <Menu />
//         </div>

//         <div className="page-for-content">
//           <div className="topmost-section">
//             <p>Back to Users</p>
//             <div className="user-details-text">
//               <h1 id="header-for-details-page">User Details</h1>
//               <div className="activate-blacklist-btns">
//                 <button id="blacklist-btn">BLACKLIST USER</button>
//                 <button id="activate-btn">ACTIVATE USER</button>
//               </div>
//             </div>
//           </div>

//           <div className="all-details">
//             <div className="brief-info-section">
//               <div className="name-account-section">
//                 <div>
//                   <img
//                     id="profile-img"
//                     src={user.profile.avatar}
//                     alt="avatar"
//                   />
//                 </div>
//                 <div>
//                   <p>Grace Effiong</p>
//                   <p>Hidikr</p>
//                 </div>

//                 <p>User Tiers</p>
//                 <div>
//                   <p>N200,000,000</p>
//                   <p>Providus Bank</p>
//                 </div>
//               </div>

//               <div className="more-info">
//                 <p>Information</p>
//                 <p>Documentation</p>
//                 <p>Bank details</p>
//                 <p>Loans</p>
//                 <p>Savings</p>
//                 <p>App Systems</p>
//               </div>
//             </div>

//             {/* Personal information section */}
//             <div className="details-section">
//               <h3>Personal Information</h3>
//               <div className="user-details-general-styling">
//                 <div>
//                   <p>Full Name</p>
//                   <p>
//                     {user.profile.firstName} {user.profile.lastName}
//                   </p>
//                 </div>
//                 <div>
//                   <p>Phone Number</p>
//                   <p>{user.phoneNumber}</p>
//                 </div>
//                 <div>
//                   <p>Email</p>
//                   <p id="personal-email">{user.email}</p>
//                 </div>
//                 <div>
//                   <p>BVN</p>
//                   <p>{user.profile.bvn}</p>
//                 </div>
//                 <div>
//                   <p>Gender</p>
//                   <p>{user.profile.gender}</p>
//                 </div>
//               </div>
//               <div className="user-details-general-styling">
//                 <div>
//                   <p>MARITAL STATUS</p>
//                   <p>Grace Effiom</p>
//                 </div>
//                 <div>
//                   <p>CHILDREN</p>
//                   <p>Grace Effiom</p>
//                 </div>
//                 <div>
//                   <p>TYPE OF RESIDENCE</p>
//                   <p>Grace Effiom</p>
//                 </div>
//               </div>
//               {/* End of personal information section */}
//               <hr />

//               {/* Education and Employment section */}
//               <h3>Education and Employment</h3>
//               <div className="user-details-general-styling">
//                 <div>
//                   <p>LEVEL OF EDUCATION</p>
//                   <p>{user.education.level}</p>
//                 </div>
//                 <div>
//                   <p>EMPLOYMENT STATUS</p>
//                   <p>{user.education.employmentStatus}</p>
//                 </div>
//                 <div>
//                   <p>SECTOR OF EMPLOYMENT</p>
//                   <p>{user.education.sector}</p>
//                 </div>
//                 <div>
//                   <p>DURATION OF EMPLOYMENT</p>
//                   <p>{user.education.duration}</p>
//                 </div>
//               </div>
//               <hr />
//               {/* End of Education and employment section */}

//               <h3>Socials</h3>
//               <div className="user-details-general-styling">
//                 <div>
//                   <h5>TWITTER</h5>
//                   {/* Hard coded cos data is the same */}
//                   <p>@lendqr</p>
//                 </div>
//                 <div>
//                   <h5>FACEBOOK</h5>
//                   <p>@lendqr</p>
//                 </div>
//                 <div>
//                   <h5>INSTAGRAM</h5>
//                   <p>@lendsqr</p>
//                 </div>
//               </div>

//               <hr />

//               <h3>Guarantor</h3>
//               <div className="user-details-general-styling">
//                 <div>
//                   <h5>FULL NAME</h5>
//                   <p>{user.guarantor.firstName}</p>
//                 </div>
//                 <div>
//                   <h5>PHONE NUMBER</h5>
//                   <p>{user.guarantor.phoneNumber}</p>
//                 </div>
//                 <div>
//                   <h5>EMAIL ADDRESS</h5>
//                   <p>{user.guarantor.email}</p>
//                 </div>
//                 <div>
//                   <h5>RELATIONSHIP</h5>
//                   <p>Friend</p>
//                 </div>
//               </div>

//               <hr />

//               <div className="user-details-general-styling">
//                 <div>
//                   <h5>Twitter</h5>
//                   <p>@twitter</p>
//                 </div>
//                 <div>
//                   <h5>Twitter</h5>
//                   <p>@twitter</p>
//                 </div>
//                 <div>
//                   <h5>Twitter</h5>
//                   <p>@twitter</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDetail;
export {};
