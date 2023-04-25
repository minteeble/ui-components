import React from "react";
import { DropZonePreviewProps } from "./DropZonePreview.types";
import { DropZone } from "../../../widgets";

const DropZonePreview = (props: DropZonePreviewProps) => {
  return (
    <>
      <div className="drop-zone-preview">
        <div className="input-header">
          {props.label && (
            <label className="drop-zone-preview-label">{props.label}</label>
          )}
        </div>
        <div className="image-wrapper">
          <img src={props.value || ""} alt="" className="image" />
        </div>
        <div className="drop-zone-container">
          <DropZone title="Set new Image" text="wefwef" allowedFiles={[]} />
        </div>
      </div>
    </>
  );
};

export default DropZonePreview;
