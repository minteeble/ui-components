import React, { useState } from "react";
import { DropZonePreviewProps } from "./DropZonePreview.types";
import { DropZone } from "../../../widgets";

const DropZonePreview = (props: DropZonePreviewProps) => {
  const [currentImage, setCurrentImage] = useState<string>(props.value || "");

  return (
    <>
      <div className="drop-zone-preview">
        <div className="input-header">
          {props.label && (
            <label className="drop-zone-preview-label">{props.label}</label>
          )}
        </div>
        <div className="image-wrapper">
          <img src={currentImage} alt="" className="image" />
        </div>
        <div className="drop-zone-container">
          <DropZone
            title="Set new Image"
            onDrop={(file) => {
              const i = new Image();
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                console.log(reader.result?.toString());
                setCurrentImage(reader.result?.toString() || currentImage);
              };
            }}
            allowedFiles={[]}
          />
        </div>
      </div>
    </>
  );
};

export default DropZonePreview;
