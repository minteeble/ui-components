import React from "react";
import { Button } from "../../forms";
import { PopupProps } from "./Popup.types";

const Popup = (props: PopupProps) => {
  const triggerClose = () => {
    props.popupLogic.closePopup();
  };

  return props.popupLogic.isPopupOpen ? (
    <div className="popup-wrapper" onClick={triggerClose}>
      <div
        className={
          "popup shadow-1" + (props.popupLogic.isPopupOpen ? " open" : "")
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="popup-content-wrapper">
          <div className="popup-content">{props.children}</div>

          <div className="btn-toolbar right">
            <Button text="Close" onClick={triggerClose} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
