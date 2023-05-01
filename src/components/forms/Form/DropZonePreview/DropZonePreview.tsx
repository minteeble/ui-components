import React, { useState } from "react";
import { DropZonePreviewProps } from "./";
import { FormFieldAlignment } from "../Form.types";
import DropZone from "../../../widgets/DropZone/DropZone";
import Button from "../../Button";

const DropZonePreview = (props: DropZonePreviewProps) => {
  const [currentImage, setCurrentImage] = useState<string>(props.value || "");

  let alignment: FormFieldAlignment =
    props.alignment || FormFieldAlignment.Vertical;

  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      <div
        className={`drop-zone-preview 
        ${
          alignment === FormFieldAlignment.Horizontal
            ? "horizontal"
            : "vertical"
        }
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
                      if (typeof props.onValueChange !== "undefined") {
                        props.onValueChange(
                          reader.result?.toString() || currentImage
                        );
                      }
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

export default DropZonePreview;
