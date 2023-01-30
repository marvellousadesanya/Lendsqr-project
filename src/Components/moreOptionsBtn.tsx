import { useState, FC } from "react";
import ModalMenu from "./moreOptions";
import moreOptions from "../Images/more-options.svg";

interface Props {
  // onClick: () => void;
  // style: {};
  id: number;
}

const MoreOptionBtn: FC<Props> = ({ id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img
        id="more-options-menu"
        src={moreOptions}
        alt=""
        onClick={() => setModalIsOpen(!modalIsOpen)}
      />
      {modalIsOpen ? <ModalMenu id={id} /> : ""}
    </div>
  );
};

export default MoreOptionBtn;
