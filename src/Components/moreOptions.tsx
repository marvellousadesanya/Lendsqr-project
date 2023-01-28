import React, { FC } from "react";

interface Props {
  onClose: () => void;
  style: {};
}

const ModalMenu: FC<Props> = ({ onClose, style }) => {
  return (
    <div className="modal-menu">
      <p>Test</p>
    </div>
  );
};

export default ModalMenu;
