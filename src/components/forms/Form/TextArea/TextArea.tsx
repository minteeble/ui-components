import React from "react";
import { TextAreaProps } from "./TextArea.types";

const TextArea = (props: TextAreaProps) => {
  return (
    <>
      <div className="textarea-wrapper">
        <div className="textarea-header">
          {props.label && (
            <label className="textarea-label">{props.label}</label>
          )}
          {props.errorMessage && (
            <span className="error">{props.errorMessage}</span>
          )}
        </div>
        <textarea
          style={{ resize: props.resizable ? "both" : "none" }}
          cols={props.cols ? props.cols : 30}
          rows={props.rows ? props.rows : 10}
          placeholder={props.placeHolder ? props.placeHolder : ""}
          className="textarea"
        >
          {props.value}
        </textarea>
      </div>
    </>
  );
};

export default TextArea;
