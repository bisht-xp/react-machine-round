import React, { useState } from "react";
import "./index.css";
import Modal from "./Modal";
import ClickOutSide from "./ClickOutSide";

const PopUpModal = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="index-modal-container">
        <button
          onClick={() => {
            setIsModal(true);
          }}
          className="button-modal"
          type="button"
        >
          Show Modal
        </button>
      </div>
      {isModal && (
        <ClickOutSide onCancel={() => setIsModal(false)}>
          <Modal onCancel={() => setIsModal(false)} />
        </ClickOutSide>
      )}
    </>
  );
};

export default PopUpModal;
