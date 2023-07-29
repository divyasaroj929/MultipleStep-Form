import React from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import Button from "../ButtonComponent/Button";
import "./modal.css";
const PopupModal = ({ closeForm }) => {
  return createPortal(
    <>
      <div className="modal-warrper" onClick={closeForm}></div>
      <div className="modal-container">
        <div className="Modal-header">
          <p>Dialog Header Title</p>
          <div className="modal-cross-icon" onClick={closeForm}>
            <BiX />
          </div>
        </div>
        <div className="modal-body-message">
          <div className="modal-body-message">
            "Click outside or press escape key in order to close the dialog
            Click"
            {/* outside or press escape key in order to close the dialog */}
          </div>
        </div>
        <div className="button-container-modal">
          <Button
            name="cencel"
            variant="ghost"
            // className="modal-click-btn-host"
            // type="button"
            onClick={closeForm}
          />
          <Button
            name="done"
            // className="modal-click-btn-done"
            onClick={closeForm}
          />

          {/* <button onClick={closeModal} className="modal-click-btn-host">
          CANCEL
        </button>
        <button className="modal-click-btn-done" onClick={closeModal}>
          Done
        </button> */}
        </div>
        {/* </div> */}
      </div>
    </>,
    document.querySelector(".modal-protalReact")
  );
};

export default PopupModal;
