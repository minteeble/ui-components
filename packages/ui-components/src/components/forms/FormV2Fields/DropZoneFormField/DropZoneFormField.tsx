import React, { useEffect, useState } from "react";
import Button from "../../Button";
import {
  DropZoneFormFieldProps,
  DropZoneLayout,
  DropZoneMode,
  DropZoneUploadStrategy,
} from "./DropZoneFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faUpload } from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";

const DropZoneFormField = (props: DropZoneFormFieldProps) => {
  //States
  const [currentImage, setCurrentImage] = useState<number | null>(0);
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [allowedFiles, setAllowedFiles] = useState<string>("");
  const layout = props.attributes.layout || DropZoneLayout.Horizontal;
  const mode = props.attributes.mode || DropZoneMode.Image;
  const uploadStrategy =
    props.attributes.uploadStrategy || DropZoneUploadStrategy.Monofile;
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
      className="drag-icon"
    >
      <g>
        <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
          <path d="M860.8,5018.4c-292.1-77.7-534.7-285-668.9-567.6c-70.7-150.7-75.4-179-82.4-471.1l-9.4-313.3h355.6h355.6v223.8c0,365.1,82.4,459.3,407.5,459.3h181.4v353.3v353.3l-204.9-2.4C1079.8,5053.7,931.4,5037.3,860.8,5018.4z" />
          <path d="M1988.9,4702.8v-353.3h494.6h494.6v353.3v353.3h-494.6h-494.6V4702.8z" />
          <path d="M3567,4702.8v-353.3h482.8h482.8v353.3v353.3h-482.8H3567V4702.8z" />
          <path d="M5121.5,4702.8v-353.3H5317c334.5,0,416.9-89.5,416.9-459.3v-223.8h353.3h353.3v254.4c0,386.3-73,593.5-285,817.3c-207.2,219-464,318-826.7,318h-207.3V4702.8z" />
          <path d="M104.7,2583.1v-497l348.6,7.1l346.2,7.1l7.1,489.9l4.7,487.5H458H104.7V2583.1z" />
          <path d="M5733.8,2583.1v-494.6h353.3h353.3v494.6v494.6h-353.3h-353.3V2583.1z" />
          <path d="M104.7,1016.8V534H458h353.3v482.8v482.8H458H104.7V1016.8z" />
          <path d="M6635.9,1452.5c-89.5-54.2-148.4-157.8-148.4-261.4c0-42.4,40-146,96.6-247.3c77.7-143.7,89.5-181.3,68.3-221.4c-35.3-65.9-127.2-61.2-181.4,9.4c-23.6,33-108.3,174.3-190.8,315.6c-164.9,285-223.8,334.5-391,334.5c-89.5,0-122.5-14.1-193.2-77.7c-73-66-87.1-96.6-96.6-195.5c-9.4-103.6,2.3-134.2,108.3-325c66-115.4,120.1-223.8,120.1-240.2c0-68.3-30.6-103.6-94.2-103.6c-61.3,0-82.4,25.9-226.1,273.2c-87.1,148.4-181.3,287.3-207.2,306.2c-134.3,87.1-322.7,58.9-426.3-63.6c-44.7-56.5-58.9-98.9-58.9-186.1c0-94.2,23.5-153.1,150.7-376.8c157.8-277.9,169.6-341.5,68.3-367.4c-73-18.9-94.2,2.4-235.5,235.5C4662.2,486.8,4593.9,541,4452.6,541c-214.3,0-367.4-212-292.1-405.1c18.8-47.1,167.2-315.6,332.1-598.2c164.9-282.6,299.1-518.2,299.1-525.2c0-4.7-141.3,89.5-310.9,212c-405.1,282.6-447.5,303.8-579.4,289.7c-120.1-14.1-204.9-68.3-282.6-183.7c-44.8-63.6-54.2-103.6-47.1-197.9c4.7-63.6,28.3-146,51.8-181.4c35.3-54.2,2035-1479.1,2298.8-1636.9c221.4-134.3,579.4-160.2,805.5-61.2c226.1,101.3,1161.2,659.5,1253,749c54.2,51.8,124.8,148.4,155.4,212c51.8,103.6,58.9,148.4,58.9,388.6l-2.3,270.9l-155.5,464c-219,645.3-374.5,989.2-708.9,1571c-207.3,362.7-306.2,515.8-358,548.8C6878.5,1511.4,6730.1,1511.4,6635.9,1452.5z M7041-285.7c9.4-23.6,94.2-273.2,190.8-558.2c169.6-506.4,174.3-518.2,129.5-560.5c-96.6-96.6-124.8-49.5-318,508.7c-98.9,287.3-179,546.4-179,574.7C6864.4-226.8,7005.7-198.5,7041-285.7z M6388.6-624.9c84.8-106,548.8-949.2,541.7-989.2c-9.4-58.9-70.7-101.3-117.8-82.4c-42.4,14.1-584.1,946.8-584.1,1003.4C6228.5-610.7,6336.8-563.6,6388.6-624.9z M6117.8-1404.4c202.6-230.8,369.8-438.1,369.8-461.7c0-51.8-44.8-96.6-98.9-96.6c-56.5,0-796.1,840.8-796.1,906.8c0,68.3,21.2,87.1,94.2,77.7C5733.8-982.9,5839.8-1088.9,6117.8-1404.4z" />
          <path d="M7707.6,1424.2c25.9-42.4,117.8-202.5,204.9-353.3L8070.3,793h471.1h471.1l91.8-91.9l91.9-91.9v-2251.7c0-2487.2,9.4-2345.9-148.4-2440.1c-73-44.8-134.3-47.1-2312.9-47.1s-2239.9,2.3-2312.9,47.1c-146,89.5-148.4,101.3-148.4,1008v822l-341.5,237.9c-186.1,131.9-346.2,240.3-353.3,240.3s-11.8-489.9-11.8-1088.2c0-1158.8,4.7-1210.6,117.8-1429.6c70.7-143.7,259.1-334.4,395.7-409.8c252-136.6,186.1-134.2,2666.2-134.2c1848.9,0,2296.4,7.1,2393,33c292.1,77.7,541.7,289.7,676,572.3l75.4,160.2l7.1,2355.3c4.7,2301.1,4.7,2357.6-42.4,2510.7c-89.5,296.8-336.8,548.8-640.6,657.1c-124.8,42.4-195.5,47.1-845.5,47.1h-709L7707.6,1424.2z" />
          <path d="M104.7-240.9c0-353.3,150.7-657.1,416.9-850.3c186.1-131.9,381.5-188.4,657.1-188.4h221.4v353.3V-573h-202.6H995l-91.9,91.9c-89.5,89.5-91.9,94.2-91.9,259.1v167.2H458H104.7V-240.9z" />
          <path d="M2005.4-589.5c-9.4-7.1-16.5-167.2-16.5-353.3v-336.8h494.6h494.6v353.3V-573H2500C2236.2-573,2012.5-580.1,2005.4-589.5z" />
        </g>
      </g>
    </svg>
  );

  //Effects

  useEffect(() => {
    if (props.attributes.allowedFiles) {
      let hold = "Only ";
      for (let i = 0; i < props.attributes.allowedFiles.length; i++) {
        hold += props.attributes.allowedFiles[i] + " ";
      }
      setAllowedFiles(hold);
    }
  }, [props.attributes.allowedFiles]);

  return (
    <>
      <div className={`drop-zone-form-field`}>
        <div className="content">
          <>
            <div className="drop-zone-container">
              {/* <DropZone
                  title="Set new Image"
                  onDrop={(file) => {
                    const i = new Image();
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      props.setValue(reader.result?.toString() || currentImage);
                      setFileName(file.name.replace(/.[a-z]*$/, ""));
                      setEdit(false);
                    };
                  }}
                  allowedFiles={["png"]}
                  text="Select or Drop new Image"
                /> */}
              <Dropzone
                onDrop={(acceptedFiles) => {
                  console.log(acceptedFiles);
                  if (
                    props.attributes.allowedFiles &&
                    props.attributes.allowedFiles.length > 0
                  ) {
                    let allowed = false;
                    for (
                      let i = 0;
                      i < props.attributes.allowedFiles.length;
                      i++
                    ) {
                      if (
                        acceptedFiles[0].name.split(".")[
                          acceptedFiles[0].name.split(".").length - 1
                        ] === props.attributes.allowedFiles[i]
                      ) {
                        allowed = true;
                      }
                    }
                    if (allowed) {
                      setError("");
                      if (typeof props.attributes.onDrop !== "undefined") {
                        props.attributes.onDrop(acceptedFiles[0]);
                      }
                    } else {
                      setError("");
                      setError(allowedFiles);
                    }
                  } else {
                    if (
                      (acceptedFiles[0].type === "image/png" ||
                        acceptedFiles[0].type === "image/jpeg") &&
                      acceptedFiles.length === 1
                    ) {
                      setError("");
                      console.log("accepted");
                      if (typeof props.attributes.onDrop !== "undefined") {
                        props.attributes.onDrop(acceptedFiles[0]);
                      }
                    } else {
                      setError("Only png or jpeg");
                    }
                  }
                }}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <section>
                    <input {...getInputProps()} />
                    <div
                      className={`drop-zone ${isDragActive ? "active" : ""} ${
                        layout === DropZoneLayout.Horizontal
                          ? "horizontal"
                          : "vertical"
                      }`}
                      {...getRootProps()}
                    >
                      <div className="file-section">
                        {mode === DropZoneMode.Image ? (
                          <div className="image-wrapper">
                            {typeof currentImage === "number" && (
                              <>
                                <img
                                  className="current-image"
                                  src={props.value[currentImage]}
                                />
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="file">file</div>
                        )}
                      </div>
                      <div className="info-section">
                        <FontAwesomeIcon icon={faCloudArrowDown} />
                        <span className="text">
                          <strong>DRAG&DROP</strong> Files here
                          <br />
                          or
                          <br />
                          Browse Files
                        </span>
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default DropZoneFormField;
