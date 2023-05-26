import React, { useState } from "react";
import DropZone from "../../../widgets/DropZone/DropZone";
import Button from "../../Button";
import { DropZoneFormFieldProps } from "./DropZoneFormField.types";

const DropZoneFormField = (props: DropZoneFormFieldProps) => {
  const [currentImage, setCurrentImage] = useState<string>(props.value || "");

  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      <div
        className={`drop-zone-preview 
        
        `}
      >
        <div className="input-header">
          {props.label && (
            <label className="drop-zone-preview-label">{props.label}</label>
          )}
        </div>
        <div className="content">
          {edit ? (
            <>
              <div className="drop-zone-container">
                <DropZone
                  title="Set new Image"
                  onDrop={(file) => {
                    const i = new Image();
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      setCurrentImage(
                        reader.result?.toString() || currentImage
                      );
                      props.setValue(reader.result?.toString() || currentImage);

                      setEdit(false);
                    };
                  }}
                  allowedFiles={["png"]}
                  text="Select or Drop new Image"
                />
              </div>
            </>
          ) : (
            <>
              <div className="image-wrapper">
                <img src={currentImage} alt="" className="image" />
              </div>
              <div className="edit-button">
                <Button
                  text={"New image"}
                  onClick={() => {
                    setEdit(true);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DropZoneFormField;
