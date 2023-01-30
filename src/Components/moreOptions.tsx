import React, { FC } from "react";
import "../Styles/moreOptions.scss";
import { Link } from "react-router-dom";

// Images
import ViewUser from "../Images/eye-icon.svg";
import BlacklistUser from "../Images/blacklist-user.svg";
import ActivateUser from "../Images/activate-user.svg";

interface Props {
  // onClick: () => void;
  // style: {};
  id: number;
}

const ModalMenu: FC<Props> = ({ id }) => {
  return (
    <div className="modal-menu">
      <Link to={`/userdetail/${id}`}>
        <p>
          <img src={ViewUser} alt="" />
          View Details
        </p>
      </Link>

      <p>
        <img src={BlacklistUser} alt="" />
        Blacklist User
      </p>
      <p>
        <img src={ActivateUser} alt="" />
        Activate User
      </p>
    </div>
  );
};

export default ModalMenu;
