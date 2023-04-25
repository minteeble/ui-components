import React from "react";
import { EditableImageProps, EditableImagesSize } from "./EditableImage.types";
import { PageCard, Popup, usePopup } from "../../page";
import DropZone from "../DropZone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const EditableImage = (props: EditableImageProps) => {
  const logic = usePopup();

  const size = props.size || EditableImagesSize.Medium;

  return (
    <>
      <div className="editable-image">
        <Popup popupLogic={logic}>
          <div className="wrapper">
            <DropZone title="Set new Image" />
          </div>
        </Popup>
        <div
          className={`image-wrapper ${
            size === EditableImagesSize.Small
              ? "small"
              : size === EditableImagesSize.Medium
              ? "medium"
              : "large"
          }`}
        >
          <img src={props.image} alt="" className="image" />
          <div
            className="pencil"
            onClick={() => {
              logic.openPopup();
            }}
          >
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditableImage;
