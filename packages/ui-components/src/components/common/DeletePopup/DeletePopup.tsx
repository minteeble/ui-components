import React from "react";
import ActionPopup from "../../widgets/ActionPopup/ActionPopup";
import { ActionPopupTemplate } from "../../widgets/ActionPopup/ActionPopup.types";
import { DeletePopupProps } from "./DeletePopup.types";

const DeletePopup = (props: DeletePopupProps) => {
  return (
    <>
      <div className={`delete-popup ${props.isOpen ? "open" : ""}`}>
        <ActionPopup
          title={props.title}
          message={props.text}
          open={props.isOpen}
          onClose={() => {
            props.setIsOpen(false);
          }}
          template={ActionPopupTemplate.Confirm}
          onTemplateButtonClick={async () => {
            props.onConfirm();
          }}
        />
      </div>
    </>
  );
};

export default DeletePopup;
