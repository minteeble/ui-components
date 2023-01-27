/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Action, ActionButton, Button } from "../../forms";
import { PopupProps } from "./Popup.types";

const Popup = (props: PopupProps) => {
  const triggerClose = () => {
    props.popupLogic.closePopup();
  };

  return props.popupLogic.isPopupOpen ? (
    <div
      className={"popup-wrapper " + (props.className || "")}
      onClick={triggerClose}
      style={props.style}
    >
      <div
        className={
          "popup shadow-1" + (props.popupLogic.isPopupOpen ? " open" : "")
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.closeCrossEnabled && (
          <ActionButton
            action={Action.Reject}
            className="popup-cross"
            onClick={triggerClose}
          />
        )}

        <div className="popup-content-wrapper">
          <div className="popup-content">{props.children}</div>

          <div className="btn-toolbar right">
            {props.closeButtonEnabled && (
              <Button
                text={props.closeButtonText || "Close"}
                onClick={triggerClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
