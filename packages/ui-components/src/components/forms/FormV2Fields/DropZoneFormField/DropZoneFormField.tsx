import React, { useState } from "react";
import DropZone from "../../../widgets/DropZone/DropZone";
import Button from "../../Button";
import { DropZoneFormFieldProps } from "./DropZoneFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const DropZoneFormField = (props: DropZoneFormFieldProps) => {
  const [currentImage, setCurrentImage] = useState<string>(props.value || "");

  const [edit, setEdit] = useState<boolean>(false);

  const [fileName, setFileName] = useState<string>("None");

  return (
    <>
      <div
        className={`drop-zone-form-field
        
        `}
      >
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
                      setFileName(file.name.replace(/.[a-z]*$/, ""));
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
              <div className="preview">
                <div className="image-wrapper">
                  <div
                    className="upload"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faUpload} />
                  </div>
                  <img src={currentImage} alt="" className="image" />
                </div>
                <div className="info">
                  <p className="file-name montserrat">{fileName}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DropZoneFormField;
